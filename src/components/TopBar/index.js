import React, { Component } from 'react';
import './index.css';

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <span className="top-bar-title">
                    Pokedex
                </span>
            </div>
        );
    }
}

export default TopBar;