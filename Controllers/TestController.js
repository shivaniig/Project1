const TestController=(req,res)=>{
res.status(200).send({
    message:"test route running",
    success:true
});
};
module.exports={TestController};