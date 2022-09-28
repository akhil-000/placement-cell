const Result = require('../models/Result');
const Interview = require('../models/Interview');


//student examination pass status with respect to interview 
module.exports.create= async function(req,res){
   
 let result= await Result.find({$and:[{student:req.body.radio[0]},{ interview:req.body.radio[1]}]});

 
 
if(result==""){
 await Result.create({
    status:req.body.radio[2],
    student:req.body.radio[0],
    interview:req.body.radio[1]
 
     })
       
    }

else{

result[0].status= req.body.radio[2];
  await result[0].save();

}

res.redirect('back');
}
