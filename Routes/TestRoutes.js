const express=require('express');
const { TestController } = require('../Controllers/TestController');
const router=express.Router()
router.get('/', TestController)

module.exports=router;