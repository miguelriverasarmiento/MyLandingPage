const Pool = require('pg').Pool
const pool = new Pool({

    user: 'postgres',
    host: 'localhost',
    database: 'landingPage',
    password: 'mr',
    port: 5432,
})

const createUser = (req, res) => {
    const {email} = req.body

    pool.query('INSERT INTO users (email) VALUES ($1)',  [email], (error, results) => {
        if (error) {
            console.log(error)
        }
        res.status(201).send(`User added with ID: ${results}`)
    })
}

module.exports = {
    createUser,
}
