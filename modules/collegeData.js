const courses = require("../data/courses.json");
const students = require("../data/students.json");
//git commit test 2
class Data{
    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

function initialize(){
    dataCollection = new Data(students, courses);
    return Promise.resolve('*****COLLEGE DATA HAS BEEN INITIALIZED*****');
}

function getAllStudents(){
    return new Promise((resolve, reject)=>{ 
        if (dataCollection.students === 0){
            reject("no results returned");
        }
        else{
            resolve(dataCollection.students);
        }
    });
}

function getTAs() {
    return new Promise((resolve, reject) => {
      const tas = dataCollection.students.filter(student => student.TA);
      if (tas.length === 0) {
        reject("no results returned.");
      } 
      else {
        resolve(tas);
      }
    });
  }

  function getCourses() {
    return new Promise((resolve, reject) => {
      if (dataCollection.courses === 0) {
        reject("no results returned.");
      } 
      else {
        resolve(dataCollection.courses);
      }
    });
  }

  module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
  };