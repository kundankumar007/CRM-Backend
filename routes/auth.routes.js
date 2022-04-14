/**
 * this file will act as a route for authrnciation and authorization
 */

// define the routes -REST endpoints for user registration
const authController = require ("../controllers/auth.contoller");


module.exports = (app) => {

    // POST 127.0.0.1:8080/crm/api/v1/auth/signup
    app.post("/crm/api/v1/auth/signup",authController.signup);
}