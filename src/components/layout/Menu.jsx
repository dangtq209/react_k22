import React, { Component } from 'react'


export default class Menu extends Component {
    render() {
        return (
            <nav>
                <div id="menu" className="collapse navbar-collapse">
                    <ul>
                        <li className="menu-item"><a href="#">iPhone</a></li>
                        <li className="menu-item"><a href="#">Samsung</a></li>
                        <li className="menu-item"><a href="#">HTC</a></li>
                        <li className="menu-item"><a href="#">Nokia</a></li>
                        <li className="menu-item"><a href="#">Sony</a></li>
                        <li className="menu-item"><a href="#">Blackberry</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
