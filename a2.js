/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Prasiddha Thapaliya Student ID:121569230 Date: 30th January, 2024
*
********************************************************************************/ 
const collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then((message) => {
    console.log(message);


    collegeData.getAllStudents()
      .then((students) => {
        console.log('Successfully retrieved ' + students.length + ' students');
      }).catch((error) => {
        console.error('Error retrieving students:', error);
      });

    collegeData.getCourses()
      .then((courses) => {
        console.log('Successfully retrieved ' + courses.length+ ' courses');
      }).catch((error) => {
        console.error('Error retrieving courses:', error);
      });

    collegeData.getTAs()
      .then((tas) => {
        console.log('Successfully retrieved ' + tas.length + ' TAs');
      }).catch((error) => {
        console.error('Error retrieving TAs:', error);
      });
  })
.catch((error) => {
    console.error('initialization error:', error);
  });