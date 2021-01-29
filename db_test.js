const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'quickdollas',
    password: 'J@kerd0u',
    port: 5432,
})

client.connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack))

client.query('SELECT * FROM transactions', (err, res) => {
  console.log(err, res.rows)
  client.end()
})