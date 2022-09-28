const skills = [
    {id: 125223, skill: 'Learn JavaScript', done: true},
    {id: 127904, skill: 'Learn Express', done: true},
    {id: 139608, skill: 'Learn Django', done: false},
    {id: 542346, skill: 'Learn FullStack', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(todo => skills.id === id);
  }