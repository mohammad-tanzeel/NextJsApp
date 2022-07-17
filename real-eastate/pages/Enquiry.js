import {useState, useEffect, React} from 'react'
import axios from 'axios';

export default function Enquiry() {

  const initialValues = { name: "", email: "", message:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
  console.log(e);
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};


const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  // console.log(formErrors);
};


// useEffect( () =>  {
//   console.log(formErrors);
//   if (Object.keys(formErrors).length === 0 && isSubmit) {
//     // console.log("submitted");
//     // console.log(formValues.name);
//     // console.log(formValues.email);
//     const postData = async () => {
//       console.log(formValues);
//       let details = {
//         name: formValues.name,
//         email: formValues.email,
//         message: formValues.message,
//       };
//       //const detailsdata = JSON.stringify(details);

//       const res = await axios({
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         url: 'http://localhost:3002/submit-enquiry-form',
//         data: details,
//         // json:true,
//       }).then(function (response) {
//         return response.data;
//         console.log(response.data);
//       });
//       console.log(res);
//     // Success if status code is 201
//     if (res._id != '') {
//       console.log(res);
//       console.log("Thank you for contacting us!");
//       // toast('Thank you for contacting us!', { type: 'success' });
//     } else {
//       console.log("'Please re-check your inputs");
//       // toast('Please re-check your inputs.', { type: 'error' });
//     }
//   }
//   postData()
//   }
// }, [formErrors]);


const validate = (values) => {
  const errors = {};
  // errors.data = "show error";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  console.log(errors);
  return errors;
};


  return (
    <><div id="wrapper">      
      <div id="mainCntr">
        {/* < />!--  / header \ --> */}
            {/* <Header></Header> */}

        {/* < />!--  \ property / --> */}
        <main id="contentCntr">
          <div>Zakir</div>
          <div class="sectionBox centered">
            {/* < />!--  \ propertie box / --> */}

            <div class="profile">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
              ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
              )}

            	<div class="loginBox">
              <form onSubmit={handleSubmit}>

                	<ul>
                    	<li><img src="images/logo-1.gif" alt="Logo"/></li>
                        <li class="alignL">
                          <input onChange={handleChange}  type="text" id="name" name="name" placeholder='Name'/>
                          <p>{formErrors.name}</p>

                          </li>
                        <li class="alignL">
                          <input onChange={handleChange}
                            type="text" id="email" name="email" placeholder="Email ID"/>
                             <p>{formErrors.email}</p>
                          </li>
                          <li class="alignL">
                          <input onChange={handleChange}  type="text" id="message" name="message" placeholder='message'/>
                          <p>{formErrors.message}</p>

                          </li>
                        {/* <li class="alignL"><textarea name='message'></textarea></li>   */}
                        <li><button  class="loginbtnS">Signup</button></li>
                        </ul>
                    </form>                    
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
				        </>
  )
}

