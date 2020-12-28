import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// import './App.css';

function Expenses() {
    const expenses = [
        {
            description: 'whata',
            amount: 12.3,
            category: 'food',
            expense: true
        },
        {
            description: 'paycheck',
            amount: 567.89,
            category: 'Being Paid',
            expense: false
        },
        {
            description: 'movies',
            amount: 4.56,
            category: 'entertainment',
            expense: true
        }
    ]

    const expenseTableBody = (
        expenses.map(expense => {
            return (
                <tr>
                    <td>{expense.description}</td>
                    <td>{'$' + expense.amount}</td>
                    <td>{expense.category}</td>
                    <td className={!expense.expense ? 'green': ''}>{expense.expense ? 'Expense' : 'Income'}</td>
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
