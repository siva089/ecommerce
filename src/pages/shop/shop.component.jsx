import React, { Component } from 'react'
import ShopData from "./shopdata"
import Preview from "../../components/PrieviewCollection/previewCollection"
class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections:ShopData 
        }
    }
    
    render() {
      const {collections}=this.state  
        return (
            <div className="shop-page">
        {collections.map(collection=>(
            <Preview key={collection.id} {...collection}  />
        ))}

            </div>
        )
    }
}
export default  Shop
