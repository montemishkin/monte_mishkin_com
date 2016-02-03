// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import data from './data'
import BioSection from './BioSection'


function Bio ({style, ...unusedProps}) {
    return (
        <article {...unusedProps} style={[styles.container, style]}>
            {data.sections.map(({title, Text, Icon}, key) => (
                <BioSection
                    key={key}
                    style={styles.section}
                    textIsFirst={key % 2 === 1}
                    Title={props => <h3 {...props}>{title}</h3>}
                    Text={Text}
                    Icon={Icon}
                />
            ))}
        </article>
    )
}


export default radium(Bio)
