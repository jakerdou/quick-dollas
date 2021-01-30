import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// import './App.css';

function Tracker() {
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
        setCatToAdd({
            ...catToAdd,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = () => {
        console.log('name:', catToAdd.name, '-- expense:', catToAdd.is_expense);
        addCategory();
    }

    const dateForm = (
        <div>
            DATE 1 ---- DATE 2
        </div>
    )

    const summary = (
        <div>
            SUMMARY
        </div>
    )

    return (
        <Container className='tracker'>
            <Row>
                <Col>
                    Between:
                    {dateForm}
                </Col>
            </Row>
            <Row>
                <Col>
                    Summary:
                    {summary}
                </Col>
            </Row>
        </Container>
    );
}

export default Tracker;