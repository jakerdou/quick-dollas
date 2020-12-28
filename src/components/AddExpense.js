import { useState } from 'react';
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
    // TODO: at some point convert amount from string to double

    const [formState, setFormState] = useState({
        amount: 0,
        category: 'Food',
        description: ''
    })

    const handleChange = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = () => {
        console.log('amount:', formState.amount, '-- category:', formState.category, '-- description:', formState.description);
    }

    const categories = [
        {
            name: 'Food',
            expense: true
        },
        {
            name: 'Gas',
            expense: true
        },
        {
            name: 'Entertainment',
            expense: true
        },
        {
            name: 'Misc. Want',
            expense: true
        },
        {
            name: 'Being Paid (Income)',
            expense: false
        },
    ];

    const categoryOptions = (
        categories.map(category => {
            return <option>{category.name}</option>
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
