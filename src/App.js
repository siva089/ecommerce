import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homePage.component"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from "./components/Header/header.jsx"
import SignInAndSignUp from "./pages/Sign/sign"
import {Switch,Route,Redirect} from "react-router-dom"
import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux"
import {setCurrentUser} from "./Redux/User/user.action"
import {selectCurrentUser} from "./Redux/User/user.selector"
import {createStructuredSelector} from "reselect"
import CheckoutPage from './pages/checkout/checkout'
class App extends React.Component {

unsubscribeFromAuth=null
componentDidMount(){
  const {setCurrentUser}=this.props
 this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
   if(user){
 const userRef=await createUserProfileDocument(user)
 userRef.onSnapshot(snapShot=>{ 
   setCurrentUser({id:snapShot.id,...snapShot.data()})
 })
   }
setCurrentUser(user)
  })
  
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
  return (
    <div>
     <Header />
      <Switch> 
   <Route exact path="/" component={HomePage} /> 
     <Route  path="/shop" component={ShopPage} /> 
     <Route exact path="/checkout" component={CheckoutPage} /> 
     <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to='/'/>:<SignInAndSignUp />} /> 
      </Switch>
    </div>
  );
}
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
