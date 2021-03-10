const Pool = require('pg').Pool
const pool = new Pool({

    user: 'postgres',
    host: 'localhost',
    database: 'landingPage',
    password: 'mr',
    port: 5432,
})

const createUser = (req, res) => {
    const email = req.body.email;
     pool.query('INSERT INTO users (email) VALUES ($1)',  [email], (error, results) => {
        if (error) {
            console.log(error)
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    createUser,
}
