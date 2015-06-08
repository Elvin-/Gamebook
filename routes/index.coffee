express=require "express"
router=express.Router()

router.get '/',(req,res)->
    res.render "index"

router.get '/detail',(req,res)->
    res.render "detail"

router.get '/login',(req,res)->
    res.render "login"

router.get '/login2',(req,res)->
    res.render "login2"

module.exports=router