import React, { useState } from 'react'
import {sections} from '../../shared/DirectoryData'
import MenuItem from '../menu-item/MenuItem'
import './Directory.scss'

const Directory = () => {
    const [items, setItems] = useState(sections)
    return (
        <div className="directory-menu">
            {items.map((item) => (<MenuItem key={item.title} title={item.title}  />))}
        </div>
    )
}

export default Directory

