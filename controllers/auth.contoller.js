const bcrypt = require ("bcryptjs");
const constants = require ("../utils/constants");
const user = require("../models/user.model");

exports.signup = async (req, res) => {

    // how user signup will happen

    var userStatus = req.body.userStatus ;

    if(!userStatus) {
        if( !req.body.userType || req.body.userType == constants.userTypes.customer){
            userStatus =  constants.userStatus.approved ;
        }else{
            userStatus = constants.userStatus.pending ;
        }
    }

    
    const userObjToBeStoredInDB = {
        name : req.body.name,
        userId : req.body.userId,
        email : req.body.email,
        userType : req.body.userType,
        password : bcrypt.hashSync(req.body.password,8),
        userStatus : userStatus 
    } 

    /**
     * insert this new user to db
    
     */

    try{
    const userCreated = await user.create(userObjToBeStoredInDB);
      console.log ("user created", userCreated);

      /**
       * Return the response
       */

      const userCreationResoponse ={
          name : userCreated.name,
          userId : userCreated.userId,
          email : userCreated.email,
          userType : userCreated.userType,
          userStatus : userCreated.userStatus,
          createdAt : userCreated.createdAt,
          updatedAt : userCreated.updatedAt
      }

      res.status(201).send(userCreationResoponse);

    }catch(err){
        console.error("Error while creatimnmng new user", err.message);
        res.staus(500)({
            message : "some internal error while inserting new user"
        })

    }
}

}