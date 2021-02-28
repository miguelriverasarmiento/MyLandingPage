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
/*var mongoose = require('mongoose');
var User = require('../model/user');

function saveEmail(req, res){

    var user = new User();
    var params = req.body;

    if(params.email){
           
        user.email = params.email;
        user.save((err, emailStored) => {

            if(err) return res.status(500).send({message: 'Server mistake'});
            if(emailStored){
                return res.status(200).send({
                    user: emailStored
                });
            }else{
                return res.status(200).send({
                    message: 'Not saved'
                });
            }
        });

    }else{
        return res.status(200).send({
            message: 'Email is required'
        });
    }
}

module.exports = { saveEmail };*/