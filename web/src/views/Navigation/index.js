// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Header from './Header'
import Footer from './Footer'


/**
 * Adds header and footer navigation bars to UI.
 */
@radium
export default class Navigation extends Component {
    render() {
        const {style, ...unusedProps} = this.props

        return (
            <div
                {...unusedProps}
                style={[
                    styles.container,
                    style,
                ]}
            >
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
