import React from 'react'
import "./signin.scss"
import FormInput from "../forminput/forminput.jsx"
import CustomButton from "../CustomButton/CustomButton.jsx"
import {auth, signInWithGoogle } from "../../firebase/firebase.utils"
class SignIn extends React.Component{
constructor(props) {
    super(props)

    this.state = {
         email:'',
         password:''
    }
}

handleSubmit=async(event)=>{
event.preventDefault();
const {email,password}=this.state
try {
    await auth.signInWithEmailAndPassword(email,password)
    this.setState({email:"",password:""})
} catch (error) {
    console.log(error);
}

}
handleChange=(event)=>{
let {name,value}=event.target;
this.setState({[name]:value})
}
render(){
return (
    <div className="sign-in">
<h2 className="title">I already have a account</h2>
<span>Sign in with your email and password</span>
<form onSubmit={this.handleSubmit}>
    <FormInput label="Email" handleChange={this.handleChange} name="email" value={this.state.email} required type="email"/>
    <FormInput label="Password" handleChange={this.handleChange} name="password" value={this.state.password} required type="password"/>
   <div className="buttons">
    <CustomButton type="submit">Sign In</CustomButton>
    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
    </div>
</form>


    </div>
)

}

}

export default SignIn