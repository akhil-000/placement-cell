// renders the employee check page as first page
module.exports.employee = function(req, res){
  
    if (req.isAuthenticated()){
      return res.redirect('/users/student');
  }

    return res.render('employee', {
        title: "Employee | or not"
    })
}



//  if employee render the sign-in page
module.exports.employeecheck = function(req, res){
  
    if(req.body.email)
 {     var email = req.body.email;
    var name   = email.substring(0, email.lastIndexOf("@"));
    var domain = email.substring(email.lastIndexOf("@") +1);
    
    if (domain=='codingninjas.com'){

              return res.redirect('/users/sign-in');
          }
    
    
          return res.render('employee', {
            title: "Employee | or not"
        })
    }


}
    