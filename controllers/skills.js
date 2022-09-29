 // controllers/todos.js
 const Skill = require('../models/skill')
 
 module.exports = {
    index,
    show,
    new: newSkill,
    create
 }

 function index(req, res) {
    res.render('skills/index', {
      skill: Skill.getAll(),
      title: 'Express Chores'
    });
  };

  function show(req, res) {
    res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Express Chores'
    })
  }

  function newSkill(req, res){
    res.render('skills/new')
  }

  function create(req, res){
    Skill.create(req.body)
    res.redirect('/skills')
  }
 