 // controllers/todos.js
 const Chore = require('../models/skill')
 
 module.exports = {
    index,
    show
 }

 function index(req, res) {
    res.render('skills/index', {
      skill: Chore.getAll(),
      title: 'Express Chores'
    });
  };

  function show(req, res) {
    res.render('skills/show', {
    skill: Chore.getOne(req.params.id),
    title: 'Express Chores'
    })
  }
 