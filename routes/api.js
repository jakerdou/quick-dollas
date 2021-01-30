var express = require("express");
const { Pool } = require('pg')


// Router
var router = express.Router();

// Initialize pool
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'quickdollas',
    password: 'J@kerd0u',
    port: 5432,
  })

// GET
// categories
router.get("/get-categories", function(req, res, next) {
    pool
        .connect()
        .then(client => {
            return client
            .query('SELECT * FROM categories')
            .then(response => {
                client.release()
                console.log('SUCCESS - get-categories')
                res.send(response.rows)
            })
            .catch(err => {
                client.release()
                console.log('FAILURE - get-categories', err.stack)
            })
        })
});

// POST
// transactions
router.post("/get-transactions", function(req, res, next) {
    console.log(req.body)
    const query_str = 'SELECT * FROM transactions WHERE date >= $1 AND date <= $2 AND user_id = $3'
    const values = [req.body.start, req.body.end, 123]
    pool
        .connect()
        .then(client => {
            return client
            .query(query_str, values)
            .then(response => {
                client.release()
                console.log('SUCCESS - get-transactions')
                res.send(response.rows)
            })
            .catch(err => {
                client.release()
                console.log('FAILURE - get-transactions', err.stack)
            })
        })
});

// PUT
// categories
router.put("/add-category", function(req, res, next) {
    console.log('name', req.body.name, typeof req.body.name);
    console.log('is_expense', req.body.is_expense, typeof req.body.is_expense);
    const query_str = 'INSERT INTO categories (user_id, name, is_expense) VALUES ($1, $2, $3)'
    const values = [123, req.body.name, req.body.is_expense]
    pool
        .connect()
        .then(client => {
            return client
            .query(query_str, values)
            .then(response => {
                client.release()
                console.log('SUCCESS - add-category')
                res.send(response)
            })
            .catch(err => {
                client.release()
                console.log('FAILURE - add-category', err.stack)
            })
        })
});

// transactions
router.put("/add-transaction", function(req, res, next) {
    const query_str = 'INSERT INTO transactions (user_id, category_id, amount, description, date) VALUES ($1, $2, $3, $4, $5)'
    const values = [123, req.body.category, req.body.amount, req.body.description, req.body.date]
    pool
        .connect()
        .then(client => {
            return client
            .query(query_str, values)
            .then(response => {
                client.release()
                console.log('SUCCESS - add-transaction')
                res.send(response)
            })
            .catch(err => {
                client.release()
                console.log('FAILURE - add-transaction')
                console.log(err.stack)
            })
        })
});



module.exports = router;