import {React, useState, useEffect} from 'react'
import axios from 'axios';

export default function Registartion() {
  
    const initialValues = { name: "", email: "", password:"", confirmPassword: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
        
    const handleChange = (e) => {
      console.log(e);
      const { id, value } = e.target;
      setFormValues({ ...formValues, [id]: value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // console.log(formErrors);
      };
    
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
        // if (!values.password) {
        //   errors.password = "Password is required!";
        // } 
        if (values.password.match(/[a-z]/g) && values.password.match(/[A-Z]/g) && values.password.match(/[0-9]/g) && 
        values.password.match(/[^a-zA-Z\d]/g) && values.password.length >= 8)
            {
                //result = "Valid Password";
                if(values.password!==values.confirmPassword){
                  errors.confirmPassword = "Mismatch Confirm Password";
                }
                
            }
			  else
            {
                errors.password = "Invalid Password";
            }
        // if (!values.confirmPassword) {
        //   errors.confirmPassword = "Confirm Password is required!";
        // }
        console.log(errors);
        return errors;
      };

      useEffect( () =>  {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          // console.log("submitted");
          // console.log(formValues.name);
          // console.log(formValues.email);
          const postData = async () => {
            console.log(formValues);
            let details = {
              name: formValues.name,
              email: formValues.email,
              password: formValues.password,
            };
            //const detailsdata = JSON.stringify(details);
      
            const res = await axios({
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              url: 'http://localhost:3002/register',
              data: details,
              // json:true,
            }).then(function (response) {
              return response.data;
              console.log(response.data);
            });
            console.log(res);
          // Success if status code is 201
          if (res._id != '') {
            console.log(res);
            console.log("User added successfully!");
            // toast('Thank you for contacting us!', { type: 'success' });
          } else {
            console.log("'Please re-check your inputs");
            // toast('Please re-check your inputs.', { type: 'error' });
          }
        }
        postData()
        }
      }, [formErrors]);


    return (
        <><div id="wrapper">      
          <div id="mainCntr">
            {/* < />!--  / header \ --> */}
                {/* <Header></Header> */}
    
            {/* < />!--  \ property / --> */}
            <main id="contentCntr">
              <div class="sectionBox centered">
                {/* < />!--  \ propertie box / --> */}
    
                <div class="profile">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">Signed in successfully</div>
                  ) : (
                    ""
                  )}
    
                    <div class="loginBox">
                  {/* <form onSubmit={handleSubmit}> */}
                  <form onSubmit={handleSubmit}>
                        <ul>
                        <li><img src="images/logo-1.gif" alt="Logo"/></li>
                            <li class="alignL">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="name" 
                                className="form-control" 
                                id="name" 
                                aria-describedby="naamelHelp" 
                                placeholder="Enter Name" 
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <p>{formErrors.name}</p>
    
                              </li>

                            <li class="alignL">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email" 
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <p>{formErrors.name}</p>
    
                              </li>
                            <li class="alignL">
                              <label htmlFor="exampleInputPassword1">Password</label>
                     <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange} 
                    />
                                 <p>{formErrors.password}</p>
                              </li>
                              <li class="alignL">
                              <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="confirmPassword" 
                                    placeholder="Confirm Password"
                                    value={formValues.confirmPassword}
                                    onChange={handleChange} 
                                />
                              <p>{formErrors.confirmPassword}</p>
    
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
