/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Prasiddha Thapaliya Student ID:121569230 Date: 3 February, 2024
*
********************************************************************************/ 
//importing courses and students from json files
const courses = require("../data/courses.json");
const students = require("../data/students.json");
//creating Data class for students and courses
class Data{
    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }
}
//dataCollection as null
let dataCollection = null;
//initializing dataCollection
function initialize(){
    dataCollection = new Data(students, courses);
    return Promise.resolve('*****COLLEGE DATA HAS BEEN INITIALIZED*****');
}
//function to get all students
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
//function to get TAs
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
//function to get courses
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
//exporting functions to be used in other files
  module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
  };