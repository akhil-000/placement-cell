const Student = require('../models/Student');
const Interview = require('../models/Interview');
const Result = require('../models/Result');

//create student details in database
module.exports.create = function(req, res){
    Student.create({
        studentid: req.body.studentid,
        studentname:req.body.studentname,
        studentstatus:req.body.studentstatus,
        batch:req.body.Batch,
        DSA:req.body.DSA,
        WebD:req.body.webD,
        React:req.body.React
       
    }, function(err, student){
        if(err){console.log('error in creating a post'); return;}
       
        return res.redirect('back');
    });
}

//get student and interview details from database into student.ejs

module.exports.list = async function(req, res){

    let students= await Student.find({})
      .populate({
          path: 'interviews',
         
      })
     
      
     let interviews = await Interview.find({})
     
              return res.render('student', {
                  title: "Placement Cell",
                  students:  students,
                  interviews: interviews
              });
     
  
  }

//delete student from database and interviews and associated exam results
module.exports.destroy =async function(req, res){
  let student=await Student.findById(req.params.id);

          await student.remove();

          let interviews= await  Interview.find({}, { student: student._id  } ) 

          Interview.updateMany({}, { $pull: { student: student._id  } })
        
        
          for(var i=0; i<interviews.length;i++ ){
            await  Result.deleteMany({$and:[{interview:interviews[i].id},{ student:student._id}]})
          }
                return res.redirect('back');
          
       

            
   
}