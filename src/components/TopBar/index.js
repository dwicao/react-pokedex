import React, { Component } from 'react';
import styles from './index_styles';

class TopBar extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.title}>
                    Pokedex
                </span>
            </div>
        );
    }
}

export default TopBar;