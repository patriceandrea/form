const router = require('express').Router();
const pool = require("../db");

module.exports = (pool) => {

  router.post('/submit', (req, res) => {

    let { name, email, description } = req.body

    const command = ' INSERT INTO users(name, email, description) VALUES($1, $2, $3) RETURNING *;'
    const values = [name, email, description]
    pool.query(command, values).then(data => {
      res.status(200).json(data.rows);

    })
      .catch((err) => console.log(err));

  })



  router.get('/', (req, res) => {
    const command = "SELECT * FROM users;";

    pool.query(command).then(data => {
      res.json(data.rows);
    })
  });


  return router;
}

