import HeadingParallax from "../components/HeadingParallax";
import { useState } from "react";
const Contact = () => {

  const initialValue = {
    name:"",
    email:"",
    subject:"",
    message:"",
  }

  const [formValue, setFormValue] = useState(initialValue);

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormValue({...formValue,[name]: value});
  }

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(formValue)
    setFormValue(initialValue);
  }

  const {name, email, subject, message} = formValue;
  return (
    <div>
      <HeadingParallax heading={"Contact"}>
        <div id="contact" className="contact-area section-padding">
          <div className="container">
            <div className="section-title text-center p-3">
             
              <p>
              Thank you for reaching out! Please feel free to contact me using the form below.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="contact">
                  <form
                    className="form"
                    name="enq"
                    method="post"
                    action="contact.php"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="form-group col-md-6 p-2">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6 p-2">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-12 p-2">
                        <input
                          type="text"
                          name="subject"
                          value={subject}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Subject"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-12 p-2">
                        <textarea
                          rows="6"
                          name="message"
                          value={message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Message"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center p-2">
                        <button
                          type="submit"
                          value="Send message"
                          name="submit"
                          id="submitButton"
                          className="btn btn-contact-bg"
                          title="Submit Your Message!"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single_address">
                  <i className="fa fa-map-marker"></i>
                  <h4>Address</h4>
                  <p>Goregaon East, Mumbai - 400065 </p>
                </div>
                <div className="single_address">
                  <i className="fa fa-envelope"></i>
                  <h4>Send your message</h4>
                  <p>ajinkyabansode36@gmail.com</p>
                </div>
                <div className="single_address">
                  <i className="fa fa-phone"></i>
                  <h4>Call</h4>
                  <p>(+91) 704 549 2122</p>
                </div>
                {/* <div class="single_address">
                  <i class="fa fa-clock-o"></i>
                  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </HeadingParallax>
    </div>
  );
};

export default Contact;
