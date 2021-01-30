import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// import './App.css';

function Categories() {
    const fetchCategories = () => {
        fetch("http://localhost:9000/get-categories")
        .then(res => res.text())
        .then(res => setCategories(JSON.parse(res)))
        .catch(err => err);
    }

    const addCategory = () => {
        fetch("http://localhost:9000/add-category", {
            method: 'PUT',
            body: JSON.stringify(catToAdd),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => err);
    }
    

    const [categories, setCategories] = useState([])
    const [catToAdd, setCatToAdd] = useState({
        name: '',
        is_expense: true
    })

    useEffect(() => {
        fetchCategories();
    }, [])

    console.log('cats', categories);

    const handleChange = event => {
        console.log(event.target.name, event.target.value);
        setCatToAdd({
            ...catToAdd,
            [event.target.name]: event.target.value,
        })
    }

    const catTableBody = (
        categories.map(category => {
            return (
                <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.is_expense ? 'Expense' : 'Income'}</td>
                </tr>
            )
            
        })
    )

    const catTable = (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {catTableBody}
            </tbody>
        </Table>
    )

    const handleSubmit = () => {
        console.log('name:', catToAdd.name, '-- expense:', catToAdd.is_expense);
        addCategory();
    }

    const addCatForm = (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={catToAdd.name} 
                        name='name' 
                        onChange={handleChange}
                        placeholder="Name of category"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control 
                        as="select"
                        value={catToAdd.is_expense} 
                        name='is_expense' 
                        onChange={handleChange}
                    >
                        <option value={true}>Expense</option>
                        <option value={false}>Income</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button onClick={handleSubmit}>Add</Button>
        </div>
    )

    return (
        <Container className='categories'>
            <Row>
                <Col>
                    Categories:
                    {catTable}
                </Col>
            </Row>
            <Row>
                <Col>
                    Add Category
                    {addCatForm}
                </Col>
            </Row>
        </Container>
    );
}

export default Categories;