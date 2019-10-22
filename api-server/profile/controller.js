const profiles = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (_req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the profiles api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all profiles

controller.get_all = (_req, res) => {
  console.log("-- GET /all --");
  profiles.find()
    // modify the next line based on your project's needs
    .then((db_response) => {
      res.send(db_response)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new profiles

controller.get_add = (req, res) => {
  console.log("-- GET /add --");
  res.send("Logged in");
}


controller.post_add = (req, res) => {
  console.log("-- POST /add --");
  console.log(req.body)
  const new_firstName = req.body.firstName;
  const new_lastName = req.body.lastName;
  const new_username = req.body.username;
  const new_email = req.body.email;
  const new_password = req.body.password;
  const new_active = req.body.active;
  const new_photo = req.body.photo;
  const new_location = req.body.location;
  const new_user = {
    firstName: new_firstName,
    lastName: new_lastName,
    username: new_username,
    email: new_email,
    password: new_password,
    active: new_active,
    photo: new_photo,
    location: new_location
  };
  
 
  profiles.create(new_user)
    // modify the next line based on your project's needs
    .then((db_response) => {
      res.send(db_response)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


/* ------------------- READ -------------------*/
// GET  "/:id"             => View profiles Info with id ...


controller.get_id = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- GET /" + profile_id + " --");
  const id_object = {
    _id: profile_id
  };
  profiles.find(id_object)
    // modify the next line based on your project's needs
    .then((db_response) => {
      res.send(db_response)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}



/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update profiles with id...


controller.get_id_update = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- GET /" + profile_id + "/update --");
  res.send("Profile is updated");
}

controller.post_id_update = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- POST /" + profile_id + "/update --");
  const id_object = {
    _id: profile_id
  };
  const firstName = req.body.firstName;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const lastName = req.body.lastName;
  const active = req.body.active;
  const photo = req.body.photo;
  const location = req.body.location;

  const name_object = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    active: active,
    photo: photo,
    location: location
  };
  profiles.update(id_object, name_object)
    // modify the next line based on your project's needs
    .then((db_response) => {
      res.send(db_response)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete profiles with id...


controller.get_id_delete = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- GET /" + profile_id + "/delete --");
  res.send("id is deleted");
}

controller.post_id_delete = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- POST /" + profile_id + "/delete --");
  const id_object = {
    _id: profile_id
  };
  profiles.remove(id_object)
    // modify the next line based on your project's needs
    .then((db_response) => {
      res.send(db_response)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* controller.post_login =(req,res) => {
  const user = {
    email: req.params.email,
    password: req.params.password 
  };
  let errors = {};
  if(isEmpty(user.email)) errors.email='Must not be empty';
  if(isEmpty(user.password)) errors.password='Must not be empty';

  if(Object.keys(errors).length > 0) return res.status(400).json(errors);
 
      

} */



  
 



module.exports = controller;