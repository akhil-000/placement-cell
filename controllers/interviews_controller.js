const Interview = require('../models/Interview');
const Result = require('../models/Result');
const Student = require('../models/Student');


//create interview in database
module.exports.create = function(req, res){

          Interview.create({
                companyname: req.body.companyname,
                date: req.body.date,
            }, function(err, interviews){
            res.redirect('back');
            });
      
}

//schedule students for interviews and interviews for students
module.exports.push= function(req,res){
    Interview.findById(req.body.interviewnames, async function(err, interview){

    interview.student.push(req.body.studentnames)  ;   
  await  interview.save(); 
    
   Student.findById(req.body.studentnames, async function(err, students){
    
    students.interviews.push(interview.id);
              await students.save();
      });


  return  res.redirect('back');
    })

  
}

//get student and interview details from database into interview.ejs

module.exports.list = async function(req, res){
  
  let students=await Student.find({});
    let interviews= await Interview.find({}).populate('student');
     let results= await Result.find().populate('student').populate('interview')

     
 
   

              return res.render('interview', {
                  title: "Placement Cell",
                  students:  students,
                  interviews: interviews,
                  results:results
              });
}

//delete interviews from database and students
module.exports.destroy =async function(req, res){

    
 let interview= await Interview.findById(req.params.id)
         await interview.remove();


         let students= await  Student.find({}, { interviews: interview._id  } )    


     await  Student.updateMany({}, { $pull: { interviews: interview._id  } })

for(var i=0; i<students.length;i++ ){
       await  Result.deleteMany({$and:[{student:students[i].id},{ interview:interview._id}]})
}
                return res.redirect('back');
            

            

          
       
  

}