const router = require('express').Router();
const pool = require("../db");

module.exports = (pool, dbQueries) => {

  // router.post('/profile', (req, res) => {
  //   let therapist_id = req.session.id
  //   const { first_name, last_name, date_of_birth, gender, about, image, location, title, cost_per_session, years_of_practice, session_type } = req.body.formData;
  //   const command = `UPDATE therapists SET first_name = $1, last_name = $2, date_of_birth = $3, gender = $4, about = $5, image = $6, location = $7, title = $8, cost_per_session = $9, years_of_practice = $10, session_type = $11 WHERE id = $12 returning *;`
  //   values = [first_name, last_name, date_of_birth, gender, about, image, location, title, cost_per_session, years_of_practice, session_type, therapist_id];

  //   db.query(command, values).then(data => {
  //     if (data["rows"].length > 0) {
  //       return res.status(200).send({
  //         "success": true,
  //         "message": "Profile page created successfully!",
  //         "therapistID": req.session.id
  //       })
  //     }
  //     return res.status(404).send("Error creating profile page")

  //   })
  // });



  router.get('/', (req, res) => {
    const command = "SELECT * FROM users;";

    pool.query(command).then(data => {
      res.json(data.rows);
    })
  });


  return router;
}

