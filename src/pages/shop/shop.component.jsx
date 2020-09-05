import React, { Component } from 'react'
import Preview from "../../components/PrieviewCollection/previewCollection"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import { selectShopSelector } from "../../Redux/shop/shop.selector"
const  Shop= ({collections})=> {
   
        return (
            <div className="shop-page">
        {collections.map(collection=>(
            <Preview key={collection.id} {...collection}  />
        ))}

            </div>
        )
    
}

const mapDispatchToProps=createStructuredSelector({
    collections:selectShopSelector
})
export default  connect(mapDispatchToProps)(Shop)
