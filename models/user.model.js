/**
 * this file will hold the schema for user resource
 */


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    /**
     * name,userId,password,email,createdAt,updatedAt,
     * usertype [admin,engineer,customer]
     * userstatus[rejected,approved,pending],
     * 
     */
    name:{
        type : String ,
        required : true,
    },
    userId:{
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,

    },
    emial : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        minlength :10,
    },
    createdAt:{
        type : Date,
        immutable : true,
        default: ()=>{
            return Date.now();
        },

    },
    updtedAt:{
        type : Date,
        default: ()=>{
            return Date.now();
        }
    },
    userType:{
        type : String,
        required:true,
        default : "CUSTOMER"
    },
    userStatus:{
        type : String,
        required:true,
        default : "APPROVED"
    }


})
module.exports = mongoose.model("user",userSchema);
