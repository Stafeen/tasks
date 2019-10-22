const followings = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the followings api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all followings

controller.get_all = (req, res) => {
  console.log("-- GET /all --");
  followings.find()
    // modify the next line based on your project's needs
    .then((db_response) => { 
      const pojo_response = JSON.parse(JSON.stringify(db_response));
      const map_cb = x => {delete x.__v; return x};
      const no__v = pojo_response.map(map_cb);
      res.send(no__v); 
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new followings

controller.get_add = (req, res) => {
    console.log("-- GET /add --");
  const newLocal = "send a post request to this rout with a user in the body - schema";
    res.send(newLocal);
}

controller.post_add = (req, res) => {
    console.log("-- POST /add --");
    const follower_id = req.body.follower_id;
    const followed_id = req.body.followed_id;
    const new_follow = {follower_id, followed_id};

    followings.create(new_follow)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


/* ------------------- READ -------------------*/
// GET  "/find/:id"             => View followings Info with id ...


controller.get_id = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- GET /"+profile_id+"/find --");
    const id_object = { _id: profile_id };
    followings.find(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}



/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete followings with id...


controller.get_id_delete = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- GET /"+profile_id+"/delete --");
    res.send("deleted");
}

controller.post_id_delete = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- POST /"+profile_id+"/delete --");
    const id_object = { _id: profile_id };
    followings.remove(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


module.exports = controller;


      // function map_cb(to_copy) {
      //   const clone = {};
      //   for(const key in to_copy) {
      //     console.log(key)
      //     if(key !== "__v") {
      //       clone[key] = to_copy[key];
      //     }
      //   }
      //   return clone;
      // };
