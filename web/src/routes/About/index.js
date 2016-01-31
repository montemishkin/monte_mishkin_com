// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import BaseLogo from 'components/Logos/Base'
import ContactInfoBar from './ContactInfoBar'
import Bio from './Bio'


/**
 * About page view.
 */
@radium
export default class About extends Component {
    render() {

        return (
            <div {...this.props}>
                <Helmet title='About' />
                <Banner
                    title='Monte Mishkin'
                    subtitle='Web Developer / Friendly Person'
                    Icon={props => <BaseLogo {...props} />}
                >
                    <ContactInfoBar />
                </Banner>
                <div style={styles.contentContainer}>
                    <div style={styles.content}>
                        <Bio />
                    </div>
                </div>
            </div>
        )
    }
}