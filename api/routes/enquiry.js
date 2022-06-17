const enquiryController = require('../controller/enquiryController');

module.exports = function(app){
    app.get("/enquiry-form", enquiryController.submitEnquiry);
    app.post("/submit-enquiry-form", enquiryController.submitEnquiryForm);
}