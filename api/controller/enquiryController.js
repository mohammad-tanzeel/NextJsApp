require('../db/db');
const Enquiry = require('../models/enquiry');

exports.submitEnquiry = async (req, res) => {
    
        const query = {};
        Enquiry.find(query, (err, enquiries) => {
          if (err) return res.send(err);
          const returnEnquiry = enquiries.map((enquiry) => {
            //   console.log(enquiry);
            const newEnquiry = enquiry.toJSON();
            return newEnquiry;

          });
          res.send(returnEnquiry);
        });
 
}

exports.submitEnquiryForm = async (req, res) => {
    
      const enquiry = new Enquiry( req.body);
      console.log("Hello "+req);
      if (!req.body.name) {
        res.status(400);
        res.send('Name is required');
      }
      enquiry.save();
      res.status(201);
      res.send(enquiry);
}