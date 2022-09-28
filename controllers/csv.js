const Interview = require('../models/Interview');
const Result = require('../models/Result');
const Student = require('../models/Student');
var array=[];
var arr=[];

var directory=__dirname;

var pathway = directory.substring(0,directory.lastIndexOf("\\"));

//json to csv converter
const {Parser} = require("json2csv");
const fs = require("fs");

console.log(pathway)

//function to grab all student details and download
module.exports.writefile = async function(req, res){
  array=[];
  arr=[];

 
const results=await Result.find({}).populate('student').populate('interview')

if(results.length==0)
{
  fs.openSync(pathway+'\\report.csv', 'w')
 return res.redirect('back')
}


for(var i=0;i<results.length;i++){
  array[0]=results[i].student.studentid;
  array[1]=results[i].student.studentname;
  array[2]=results[i].student.studentstatus;
  array[3]=results[i].student.batch;
  array[4]=results[i].student.DSA;
  array[5]=results[i].student.WebD;
  array[6]=results[i].student.React;
  array[7]=results[i].interview.companyname;
  array[8]=results[i].interview.date;
  array[9]=results[i].status;
  
//create a json object for each student with all details to convert into csv 
var obj={
  studentid:array[0],
  studentname:array[1],
  studentstatus:array[2],
  batch:array[3],
  DSA:array[4],
  WebD:array[5],
  React:array[6],
  companyname:array[7],
  date:array[8], 
  result:array[9]
}
arr.push(obj);
}

//write all the student data in csv format
  const json2csvParser = new Parser();

  var csvData = json2csvParser.parse(arr);
   fs.writeFile(pathway+'\\report.csv', csvData,'utf-8', function(error) {  
  if (error) {console.log("error")}
  else {
    console.log("Write to report.csv successfully!");}
  res.redirect('back');
}  );


}