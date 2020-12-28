import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddExpense from './AddExpense';
import EditCategories from './EditCategories';

// import './App.css';


function Home() {
  return (
    <Container className='home'>
        <Row>
            <Col>
                <EditCategories />
            </Col>
            <Col>
                <AddExpense />
            </Col>
            <Col>
                <Link to="/expenses">View Expenses</Link>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;
