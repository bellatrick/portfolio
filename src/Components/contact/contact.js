import React, {useState} from 'react'
import './styles.css'
const isEmpty=(data)=>{
  if(data.trim()===''){
      return true
  }
}
const Contact = () => {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [message, setMessage]= useState('')
    const [error, seterror] = useState(false)
    const[button, setButton]=useState(false)
    const [EmailSent, setEmailSent]= useState(null)
   const handleSubmit=(e)=>{
       e.preventDefault()
       if(isEmpty(name) ||isEmpty(email)|| isEmpty(message)) {
           seterror(true)
           return;
       }
       setButton(true)
       setEmailSent(true)
   }

    return (
        <div className='inputForm'>
            <h2>Let's talk</h2>
           <form onSubmit={handleSubmit}>
               <div className='inputName'>
                <input type='text' required placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
               </div>
               <div className='inputEmail'>
                <input type='email' required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div>
               <h4 className='messageLabel'>Message</h4>
               <textarea required name="" id="" cols="40" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
               </div>
               <button className='button'>Shoot</button>
               {EmailSent&&<p>Email successfully sent</p>}
               {EmailSent===false&&<p>Message not sent</p>} 
               {error && <p>Input must not be empty</p>}  
           </form>
        </div>
    )
}

export default Contact
