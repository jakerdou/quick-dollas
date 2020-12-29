import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// import './App.css';

function Categories() {

    const [catToAdd, setCatToAdd] = useState({
        name: '',
        expense: true
    })

    const handleChange = event => {
        console.log(event.target.name, event.target.value);
        setCatToAdd({
            ...catToAdd,
            [event.target.name]: event.target.value,
        })
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

    const catTableBody = (
        categories.map(category => {
            return (
                <tr>
                    <td>{category.name}</td>
                    <td>{category.expense ? 'Expense' : 'Income'}</td>
                </tr>
            )
            
        })
    )

    const catTable = (
        <Table striped bordered hover>
            <thead>
                <tr>
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
        console.log('name:', catToAdd.name, '-- expense:', catToAdd.expense);
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
                        value={catToAdd.expense} 
                        name='expense' 
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
                    categories:
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
