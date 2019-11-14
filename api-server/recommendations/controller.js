const recommendations = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (_req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the recommendations api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all recommendations

controller.get_all = (_req, res) => {
  console.log("-- GET /all --");
  recommendations.find()
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
// POST "/add"                => Create new recommendation

controller.get_add = (req, res) => {
  console.log("-- GET /add --");
  res.send("Logged in");
}


controller.post_add = (req, res) => {
  console.log("-- POST /add --");
  const recommendation = req.body.recommendation;
  const author = req.body.author;
  const receiver = req.body.receiver;
  const date = req.body.date;
    const new_recommendation = {
    recommendation,
    author,
    receiver,
    date,
  };
  
 
  recommendations.create(new_recommendation)
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
// GET  "/:id"             => View recommendations Info with id ...


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
// POST "/:id/update"     => update recommendations with id...


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
  const recommendationText = req.body.recommendationText;
  const updateDate = Date.now()

  const recommendations_object = {
    recommendationText,
    updateDate
  };
  profiles.update(id_object, recommendations_object)
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




  
 



module.exports = controller;