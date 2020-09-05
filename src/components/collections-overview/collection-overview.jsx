import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect"
import './collectio-overview.scss'
import Preview from "../PrieviewCollection/previewCollection"
import { selectCollectionsForPreview } from "../../Redux/shop/shop.selector"
const CollectionsOverview=({collections})=>{
    console.log(collections);
return(
    <div className="collections-overview">
    {collections.map(collection=>(
            <Preview key={collection.id} {...collection}  />
        ))}
    </div>
)
    }

const mapDispatchToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})
export default connect(mapDispatchToProps)(CollectionsOverview)