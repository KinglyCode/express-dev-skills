const skills = [
    {id: 125434, skill: 'Learn JavaScript', done: true},
    {id: 127904, skill: 'Learn Express', done: true},
    {id: 139608, skill: 'Learn Django', done: false},
    {id: 542346, skill: 'Learn FullStack', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }

  function create(skill){
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }