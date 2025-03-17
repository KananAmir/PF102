const Joi = require("joi")
const validate = (req, res, next)=>{
    // const { title, price, description, category, image } = req.body

    const {error} = productValidationSchema.validate({...req.body})
 
    console.log(req.body);
    
    // console.log(error.details[0]);
    
    if(error){
        return res.status(400).json({
            "error": error.details[0].message,
        })
    }
    next()
}

const productValidationSchema = Joi.object({
    title: Joi.string().min(4).max(25).required(),
    price: Joi.number().required(),
    description: Joi.string().min(10).max(200).required(),
    category: Joi.string().required(),
    image: Joi.string(),
})



module.exports = validate