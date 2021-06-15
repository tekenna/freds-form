const mongoose = require("mongoose")
const Schema = mongoose.Schema

const formSchema = new Schema({
    fullName:{
        type: String,
    },
    school:{
        type: String,
    },
    department:{
        type: String,
    },
    level:{
        type: Number,
    },
    address:{
        type: String,
    },
    transport:{
        type: String,
    },
    diet:{
        type: String,
    },
    mealPlan:{
        type: String,
    },
    drinks:{
        type: Number,
    },
    alcohol:{
        type: Number,
    },
    bookNumber:{
        type: Number,
    },
    bookType:{
        type: String,
    },
    textbooks:{
        type: Number,
    },
    clothes:{
        type: Number,
    },
    power:{
        type: Number,
    },
    fuel:{
        type: Number,
    },
    genRunTime:{
        type: Number,
    }
}, {timestamps: true})
const Form = mongoose.model("User", formSchema)
module.exports = Form