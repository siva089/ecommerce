import React from 'react'

import FormInput from "../forminput/forminput.jsx"
import CustomButton from "../CustomButton/CustomButton.jsx"
import {auth,createUserProfileDocument} from  "../../firebase/firebase.utils";
import "./signup.scss"

class SignUp extends React.Component{
constructor(props) {
    super(props)

    this.state = {
         displayName:'',
         email:'',
         password:'',
         confirmpassword:''
    }
}
handleChange=(event)=>{
    let {name,value}=event.target;
    this.setState({[name]:value})
}

handleSubmit=async event=>{
event.preventDefault();
const {displayName,email,password,confirmpassword}=this.state;
if(password!==confirmpassword){
    alert("password don't match")
    return;
}
try {
   const {user}=await auth.createUserWithEmailAndPassword(email,password);
  await createUserProfileDocument(user,{displayName})
  this.setState({displayName:"",email:"",password:"",confirmpassword:""})
} catch (error) {
 console.error(error);   
}
}

render(){
    const {displayName,email,password,confirmpassword}=this.state;
return(<div className="sign-up">
 <h2 className="title">I do not have a account</h2>
 <span>Sign up with email and password</span>
 <form className="sign-up-form" onSubmit={this.handleSubmit}>
<FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label='Display Name' required/>
<FormInput type="email" name="email" value={email} onChange={this.handleChange} label='Email' required/>
<FormInput type="password" name="password" value={password} onChange={this.handleChange} label='Password' required/>
<FormInput type="password" name="confirmpassword" value={confirmpassword} onChange={this.handleChange} label='Confirm Password' required/>
<CustomButton type="submit">Sign Up</CustomButton>
 </form>
</div>
)
}
}

export default SignUp
