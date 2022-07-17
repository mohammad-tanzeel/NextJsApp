const userController = require('../controller/userController');

module.exports = function(app){
    // app.get("/enquiry-data", enquiryController.submitData);
    app.post("/register", userController.user_registration);
    app.post("/login", userController.user_login);
}