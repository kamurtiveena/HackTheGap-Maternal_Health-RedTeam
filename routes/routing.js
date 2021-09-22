var express = require('express');
var routing = express.Router();
const pool = require('../connection/db');
const sendEmail = require('../public/javascripts/sendMail');

//Insert and update
routing.post('/insert_user', async function(req, res, next) {
    try {
        const { name, email, subject, message } = req.body;
        // console.log(req.body)
        const insertUser = await pool.query(
                `INSERT INTO contacted_user
             VALUES(DEFAULT,$1,$2,$3,$4) RETURNING *`, [name, email, subject, message]
            )
            // res.json(insertUser.rows);
        sendEmail(email);
        res.json('User Successfully created');
    } catch (err) {
        console.log(err);
    }
})

routing.get('/getusers', async function(req, res, next) {
    try {
        const users = await pool.query(
            "SELECT * FROM contacted_user"
        )
        res.json(users.rows);
    } catch (err) {
        console.log(err);
    }
})

routing.get('/getuser/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        const users = await pool.query(
            "SELECT * FROM contacted_user WHERE user_id = $1", [id]
        )
        res.json(users.rows);
    } catch (err) {
        console.log(err);
    }
})


routing.post('/insert_journal', async function(req, res, next) {
    try {
        const { name, email, country, state, contact, message } = req.body;
        // console.log(req.body)
        const insertUser = await pool.query(
                `INSERT INTO journals
             VALUES(DEFAULT,$1,$2,$3,$4,$5,$6) RETURNING *`, [name, email, country, state, contact, message]
            )
            // res.json(insertUser.rows);
        res.json('Journal Successfully Submitted');
    } catch (err) {
        console.log(err);
    }
})
routing.put('/editjournal/:id', async function(req, res, next) {
    try {
        const { name, email, country, state, contact, message } = req.body;
        const { id } = req.params;
        // console.log(req.body)
        const insertUser = await pool.query(
                `UPDATE journals SET
             name=$1,email=$2,country=$3,state=$4,contact=$5,message=$6
             WHERE journal_id=$7 RETURNING *`, [name, email, country, state, contact, message, id]
            )
            // res.json(insertUser.rows);
        res.json('journal Updated Successfully');
    } catch (err) {
        console.log(err);
    }
})
routing.delete('/journal/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        const users = await pool.query(
            "DELETE FROM journals WHERE journal_id = $1", [id]
        )
        res.json('Journal Deleted');
    } catch (err) {
        console.log(err);
    }
})

routing.get('/journals', async function(req, res, next) {
    try {
        const users = await pool.query(
            "SELECT * FROM journals"
        )
        res.json(users.rows);
    } catch (err) {
        console.log(err);
    }
})

routing.get('/journal/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        const users = await pool.query(
            "SELECT * FROM journals WHERE journal_id = $1", [id]
        )
        res.json(users.rows);
    } catch (err) {
        console.log(err);
    }
})

//Admin Manual enter journal details to show on open source
routing.post('/adminjournal', async function(req, res, next) {
    try {
        const { journal_title, journal_description, journal_image } = req.body;
        // console.log(req.body)
        const insertUser = await pool.query(
                `INSERT INTO journal_details
             VALUES(DEFAULT,$1,$2,$3) RETURNING *`, [journal_title, journal_description, journal_image]
            )
            // res.json(insertUser.rows);
        res.json('Journal Details Successfully Submitted');
    } catch (err) {
        console.log(err);
    }
})
routing.put('/adminjournal/:id', async function(req, res, next) {
    try {
        const { journal_title, journal_description, journal_image } = req.body;
        const { id } = req.params;
        // console.log(req.body)
        const insertUser = await pool.query(
                `UPDATE journal_details SET
             journal_title=$1, journal_description=$2,journal_image=$3
             WHERE journal_d_id=$4 RETURNING *`, [journal_title, journal_description, journal_image, id]
            )
            // res.json(insertUser.rows);
        res.json('journal Details Updated Successfully');
    } catch (err) {
        console.log(err);
    }
})
routing.delete('/adminjournal/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        const users = await pool.query(
            "DELETE FROM journal_details WHERE journal_d_id = $1", [id]
        )
        res.json('Journal Details Deleted');
    } catch (err) {
        console.log(err);
    }
})

routing.get('/adminjournals', async function(req, res, next) {
    try {
        const users = await pool.query(
            "SELECT * FROM journal_details"
        )
        res.json(users.rows);
    } catch (err) {
        console.log(err);
    }
})

routing.get('/adminjournal/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        const users = await pool.query(
            "SELECT * FROM journal_details WHERE journal_d_id = $1", [id]
        )
        res.json(users.rows);
    } catch (err) {
        console.log(err);
    }
})


module.exports = routing;