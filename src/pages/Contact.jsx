import React, { useState } from 'react'

const Contact = () => {
const [formData , setFormData]  = useState(
  {
   name:"",
   email:"",
   message:""
  }
)

const onHandleChange = (e)=>{
  const {name , value } = e.target
  setFormData((prev)=>({
    ...prev , [name]:value
  }))

}

const onhandleSubmit =(e)=>{
  e.preventDefault();
  console.log(formData);


}


  return (
    <>
   <section className="section-contact">
    <h2 className="container-title"> Contact Us</h2>

<div className="contact-wrapper container">
 <form action="" onSubmit={(e)=>{onhandleSubmit(e)}}>
        <input type="text" required autoComplete='false' placeholder='Enter your name' name='name' className='form -control' onChange={onHandleChange} value={formData.name}/>
  <input type="email" required autoComplete='false' placeholder='Enter your email' name='email' className='form -control'  onChange={onHandleChange} value={formData.email}/>

  <textarea name="message" id="" required autoComplete='off' placeholder='Enter your message' rows="10" className='form -control'  onChange={onHandleChange} value={formData.message}></textarea>

  <button type='submit' value="send">Send</button>
      </form>
   </div>
   </section>
    </>
  )
}

export default Contact

// formData.entrie return an iterator  of key-value pairs from the form data in form keys are the name and the value are the input values 

// ➡️ form get the form data this is also good but this is used form small project  
// const onhandleSubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);
// };