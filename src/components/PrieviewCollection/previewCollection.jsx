import React from 'react'
import "./priviewCollection.scss"
import CollectionItem from "../collection-item/collection-item"
const PreviewCollection=({title,items})=>(
<div className='collection-preview'>
<h1 className='title'>{title.toUpperCase()}</h1>
<div className="preview">
{items.filter((i,index)=>index<4).map((item=>(
<CollectionItem {...item} key={item.id}/>
)))}
</div>
</div>
)

export default PreviewCollection
