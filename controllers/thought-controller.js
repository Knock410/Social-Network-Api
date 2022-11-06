const { Thought } = require('../models');


const thoughtController = {
    //get zll thoughts 
getAllThoughts(req,res) {
    
        thought.find({})
            .then(dbthoughtData => res.json(dbthoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
              });
            },
//get one Thought by id 
getThoughtById({ params}, res) {
    Thought.findOne({ _id: params.id}).then(dbThoughtData => res.json(dbThoughtData)).catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
},
//create a new Thought
createThought({ body }, res) {
    Thought.create(body)
      .then(dbThoughtData => res.json(dbThoughtData)).push
      .catch(err => res.json(err));

}
