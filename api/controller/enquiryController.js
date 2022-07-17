require('../db/db');
const Enquiry = require('../models/enquiry');

exports.submitData =  (req, res) => {
        const query = {};
        Enquiry.find(query, (err, enquiries) => {
          if (err)   
            { res.status(400).json({
            status_code: 0,
            error_msg: err,
          });
        }
      
          const returnEnquiry = enquiries.map((enquiry) => {
            //   console.log(enquiry);
            const newEnquiry = enquiry.toJSON();
            return newEnquiry;

          });
          res.send(returnEnquiry);
        });
        // res.send({"message":"Yes got data"});
 
}

exports.submitEnquiryForm = async (req, res) => {
    
      const enquiry = new Enquiry(req.body);
      console.log("Hello ",req.body.name);
      if (!req.body) {
        // res.status(400);
        return res.status(400).send('Name is required');
      }
      enquiry.save();
     
      res.status(201).send(enquiry);
}