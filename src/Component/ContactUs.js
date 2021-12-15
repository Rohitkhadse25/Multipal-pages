import React from 'react'

const ContactUs = () => {
    return (
        <>
        <section className="contactus-section">
        <div className="container">
        <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
        <div className="row">
        <div className="contactus-leftside col-12 col-lg-5">
        <h1 className="main-heading fw-bold">Connect with our <br /> Sales Team.</h1>
        <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque eaque, tenetur ullam nam similique atque labore velit consectetur eos.</p>
        <figure>
        <img src="./Images/image5.jpg" alt="contactusImg" />
        </figure>
        </div>

        <div className="contact-rightside col-12 col-lg-7">
        <form method="POST">
        
        <div className="row">
        <div className="col-12 col-lg-6 contact-input-field">
        <input type="text" 
        className="form-control"
        name="" 
        id="" 
        placeholder="first name" />
        </div>
        <div className="col-12 col-lg-6 contact-input-field">
        <input type="text" 
        className="form-control"
        name="" 
        id="" 
        placeholder="last name" 
        />
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-lg-6 contact-input-field">
        <input type="number" 
        className="form-control"
        name="" 
        id="" 
        placeholder="phone number" />
        </div>
        <div className="col-12 col-lg-6 contact-input-field">
        <input type="email" 
        className="form-control"
        name="" 
        id="" 
        placeholder="Email ID" 
        />
        </div>
        </div>
       
        <div className="row">
        <div className="col-12">
        <input type="text" name="" id="" placeholder="Add Address"
        className="form-control contact-input-field"/>
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <input type="text" name="" id="" placeholder="Enter your message"
        className="form-control"/>
        </div>
        </div>
        <div className="form-check form-checkbox-style">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" className="main-hero-para">
         I agree that the moneypay pay contact me at all the email address or phone number above
        </label>
      </div>
      <button type="submit" className="btn btn-style w-100 ">Submit</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>    
        </>
    )
}

export default ContactUs
