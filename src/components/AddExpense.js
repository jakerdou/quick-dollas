import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import './App.css';


function AddExpense() {
    const fetchCategories = () => {
        fetch("http://localhost:9000/get-categories")
        .then(res => res.text())
        .then(res => setCategories(JSON.parse(res)))
        .catch(err => err);
    }

    const addTransaction = () => {
        fetch("http://localhost:9000/add-transaction", {
            method: 'PUT',
            body: JSON.stringify(formState),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => err);
    }

    var today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const [categories, setCategories] = useState([])
    const [formState, setFormState] = useState({
        amount: 0,
        category: null,
        date: today,
        description: ''
    })

    // TODO: maybe use a setTimeout to set the default category

    useEffect(() => {
        fetchCategories();
    }, [])

    const handleChange = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = () => {
        console.log('amount:', formState.amount, '-- category:', formState.category, '-- description:', formState.description);
        addTransaction();
    }

    const categoryOptions = (
        categories.map(category => {
            return <option value={category.id}>{category.name}</option>
        })
    ) 

    return (
        <Container className='add-expense'>
            <Row>
                <Col>
                    add expense
                    <Form>
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control 
                                type="number" 
                                value={formState.amount} 
                                name='amount' 
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                                as="select"
                                value={formState.category} 
                                name='category' 
                                onChange={handleChange}
                            >
                                {categoryOptions}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="text"
                                value={formState.date} 
                                name='date' 
                                onChange={handleChange}
                                placeholder="YEAR-MONTH-DAY"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={formState.description} 
                                name='description' 
                                onChange={handleChange}
                                placeholder="desc"
                            />
                        </Form.Group>
                    </Form>
                    <Button onClick={handleSubmit}>Add</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddExpense;
