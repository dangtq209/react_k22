import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li class="menu-item"><Link to="category">iPhone</Link></li>
                    <li class="menu-item"><Link to="category">Samsung</Link></li>
                    <li class="menu-item"><Link to="category">HTC</Link></li>
                    <li class="menu-item"><Link to="category">Nokia</Link></li>
                    <li class="menu-item"><Link to="category">Sony</Link></li>
                    <li class="menu-item"><Link to="category">Blackberry</Link></li>
                </ul>
            </>
        )
    }
}
