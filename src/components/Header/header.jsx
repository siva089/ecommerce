import React from 'react'
import "./header.scss"
import {Link} from "react-router-dom"
import {auth} from "../../firebase/firebase.utils"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {connect} from "react-redux"
import CartIcon from '../cart-icon/CartIcon'
import Cartdropdown from "../CartDropdown/cartdropdown"
const Header=({currentUser,hidden})=>(
<div className="header">
<Link to="/" >
<Logo className="logo" />
</Link>

<div className="options">
    <Link className='option' to='/shop'>Shop</Link>
    <Link className='option' to='/contact'>Contact</Link>

{currentUser?<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>:<Link className='option' to='/signin'>Sign In</Link>}
    <CartIcon />
    
    {/* <Link className='option' to='/shop'>Shop</Link>
    <Link className='option' to='/shop'>Shop</Link> */}
</div>
 { hidden?null:<Cartdropdown />}
</div>
)

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
currentUser:currentUser,
hidden
})
export default connect(mapStateToProps)(Header)

