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
        fetch("http://localhost:9000/get-transactions", {
            method: 'POST',
            body: JSON.stringify(dates),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
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
    const [dates, setDates] = useState({
        start: '1970-01-01',
        end: '2100-12-31'
    })

    useEffect(() => {
        fetchTransactions();
        fetchCategories();
    }, [])

    const handleChange = event => {
        setDates({
            ...dates,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = () => {
        console.log('submitted', dates);
        fetchTransactions();
    }

    const dateInput = (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Start</Form.Label>
                    <Form.Control
                        type="text"
                        value={dates.start} 
                        name='start' 
                        onChange={handleChange}
                        placeholder="YEAR-MONTH-DAY"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>End</Form.Label>
                    <Form.Control
                        type="text"
                        value={dates.end} 
                        name='end' 
                        onChange={handleChange}
                        placeholder="YEAR-MONTH-DAY"
                    />
                </Form.Group>
            </Form>
            <Button onClick={handleSubmit}>Submit</Button>
        </>
    )

    const expenseTableBody = (
        transactions.map(transaction => {
            const category = categories.find(category => category.id === transaction.category_id) || {is_expense: true}
            console.log('date', transaction.date, typeof transaction.date);
            return (
                <tr>
                    <td>{transaction.description}</td>
                    <td>{'$' + transaction.amount}</td>
                    <td>{category.name}</td>
                    <td>{transaction.date && transaction.date.substring(0, 10)}</td>
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
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {expenseTableBody}
            </tbody>
        </Table>
    )

    const summary = () => {
        let totalSpent = 0 
        transactions.forEach(transaction => {
            totalSpent += transaction.amount
        })
        return (
            <div>
                You spent ${totalSpent} between {dates.start} and {dates.end}
            </div>
        )
    }

    return (
        <Container className='edit-categories'>
            <Row>
                <Col>
                    {dateInput}
                </Col>
            </Row>
            <Row>
                <Col>
                    {expenseTable}
                </Col>
            </Row>
            <Row>
                <Col>
                    {summary()}
                </Col>
            </Row>
        </Container>
    );
}

export default Expenses;
