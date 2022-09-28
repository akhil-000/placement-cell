const indeed = require('indeed-scraper');



//getting job posts from indeed api
module.exports.jobs=async function(req,res){

  
  var jobs=[];
if(req.body.radio==undefined){  
  res.render('jobs', {
    title: "Jobs",
   jobs:jobs
  })
}
else
 
{console.log(req.body.radio);

const queryOptions = {
  host: 'in.indeed.com',
  query: req.body.radio,
  city: 'India',
  radius: '25',
  level: 'entry_level',
  jobType: 'fulltime',
  maxAge: '7',
  sort: '30-07-2022',
  limit: 20
};

const data =await indeed.query(queryOptions);

jobs=data;

console.log(jobs); 
  await res.render('jobs', {
    title: "Jobs",
   jobs:jobs
  });

 }
 
}