import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homePage.component"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from "./components/Header/header.jsx"
import SignInAndSignUp from "./pages/Sign/sign"
import {Switch,Route} from "react-router-dom"
import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     currentUser:null
  }
}
unsubscribeFromAuth=null
componentDidMount(){
 this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
   if(user){
 const userRef=await createUserProfileDocument(user)
 userRef.onSnapshot(snapShot=>{ 
   this.setState({currentUser:{id:snapShot.id,...snapShot.data()}})
 })
   }
this.setState({currentUser:user})
  })
  
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
    console.log(this.state.currentUser);
  return (
    <div>
     <Header currentUser={this.state.currentUser} />
      <Switch> 
   <Route exact path="/" component={HomePage} /> 
     <Route exact path="/shop" component={ShopPage} /> 
     <Route exact path="/signin" component={SignInAndSignUp} /> 
      </Switch>
    </div>
  );
}
}

export default App;
