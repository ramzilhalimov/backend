const loggerTwo = (request,response,next)=>{
  console.log('Log 1');
  next();    
}
module.exports = loggerTwo;