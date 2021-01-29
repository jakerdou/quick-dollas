import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// import './App.css';

function Expenses() {

    const fetchTransactions = () => {
        fetch("http://localhost:9000/get-transactions")
        .then(res => res.text())
        .then(res => setTransactions(JSON.parse(res)))
        .catch(err => err);
    }

    const fetchCategories = () => {
        fetch("http://localhost:9000/get-categories")
        .then(res => res.text())
        .then(res => setCategories(JSON.parse(res)))
        .catch(err => err);
    }

    const [transactions, setTransactions] = useState([])
    const [categories, setCategories] = useState([])
    const [dummy, setDummy] = useState(0)

    useEffect(() => {
        fetchTransactions();
        fetchCategories();
    }, [dummy])

    const expenseTableBody = (
        transactions.map(transaction => {
            const category = categories.find(category => category.id === transaction.category_id) || {is_expense: true}
            return (
                <tr>
                    <td>{transaction.description}</td>
                    <td>{'$' + transaction.amount}</td>
                    <td>{transaction.category_id}</td>
                    <td className={!category.is_expense ? 'green': ''}>{category.is_expense ? 'Expense' : 'Income'}</td>
                </tr>
            )
        })
    )

    const expenseTable = (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {expenseTableBody}
            </tbody>
        </Table>
    ) 

    return (
        <Container className='edit-categories'>
            <Row>
                <Col>
                    {expenseTable}
                </Col>
            </Row>
        </Container>
    );
}

export default Expenses;
