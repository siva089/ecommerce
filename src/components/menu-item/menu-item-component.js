import React from 'react'
import "./menu-item-component.scss"
import {withRouter} from "react-router-dom"
const MenuItem=({title,imageUrl,size:large,linkUrl,history,match})=>( <div onClick={()=>history.push(`/${linkUrl}`)} className={`${large} menu-item`}>

<div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} />    
<div className="content">
<h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">Shop Now</span>
</div>
</div>)

export default withRouter(MenuItem)