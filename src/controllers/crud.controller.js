
const {sendmail,adminMail}=require('../utils/utils')

const newuser = (model)=>async(req,res)=>{
    try {
        const document= await model.create(req.body)
        res.send(document)
        sendmail(document)
        adminMail(document)
    } catch (e) {
        res.status(500).send(e.message)
    }
}


module.exports=(model)=>{
    return {
        createUser:newuser(model)
    }
}