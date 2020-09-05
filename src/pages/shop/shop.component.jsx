import React, { Component } from 'react'
import {connect} from "react-redux"
import {Route} from "react-router-dom"
import {createStructuredSelector} from "reselect"
import CollectionsOverview from "../../components/collections-overview/collection-overview"
import  Collection from "../collection/collection.component"
const  Shop= ({match})=> {
   console.log(match.path);
        return (
    <div className="shop-page">
    <Route path={`${match.path}`} exact component={CollectionsOverview} />   
    <Route path={`${match.path}/:collectionId`} component={Collection} />
    {/* <CollectionsOverview /> */}
    </div>
        )   
}
export default  connect()(Shop)
