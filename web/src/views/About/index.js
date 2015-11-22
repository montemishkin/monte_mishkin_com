// third party imports
import React, {Component} from 'react'
import radium from 'radium'
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
            <div>
                <Banner
                    style={styles.banner}
                    title='Monte Mishkin'
                    subtitle='A friendly person.'
                    Icon={props => <BaseLogo {...props} />}
                >
                    <ContactInfoBar />
                </Banner>
                <Bio />
            </div>
        )
    }
}
