const enquiryController = require('../controller/enquiryController');

module.exports = function(app){
    app.get("/enquiry-data", enquiryController.submitData);
    app.post("/submit-enquiry-form", enquiryController.submitEnquiryForm);
}