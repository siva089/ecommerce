import React from 'react'
import MenuItem from "../menu-item/menu-item-component"
import "./directory-component-styles.scss"
import {connect} from "react-redux"
import {selectDirectorySections} from "../../Redux/directory/directorySelector"
import {createStructuredSelector} from "reselect"
const Directory=({sections})=>(
  <div className="directory-menu">
{
sections.map(section=>(<MenuItem key={section.id} {...section} />))
}
</div>
)



const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory)