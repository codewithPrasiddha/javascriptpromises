/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Prasiddha Thapaliya Student ID:121569230 Date: 30th January, 2024
*
********************************************************************************/ 
//initializing collegeData module
const collegeData = require('./modules/collegeData');
//handling initialize promise
collegeData.initialize()
  .then((message) => {
    console.log(message);

    //running get student function
    collegeData.getAllStudents()
      .then((students) => {
        console.log('Successfully retrieved ' + students.length + ' students');
      }).catch((error) => {
        console.error('Error retrieving students:', error);
      });
      //running get courses function
    collegeData.getCourses()
      .then((courses) => {
        console.log('Successfully retrieved ' + courses.length+ ' courses');
      }).catch((error) => {
        console.error('Error retrieving courses:', error);
      });
      //running get TAs function
    collegeData.getTAs()
      .then((tas) => {
        console.log('Successfully retrieved ' + tas.length + ' TAs');
      }).catch((error) => {
        console.error('Error retrieving TAs:', error);
      });
  })//catching error if any
.catch((error) => {
    console.error('initialization error:', error);
  });