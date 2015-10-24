// third party imports
import React from 'react'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import createDetailView from 'views/createDetailView'


/**
 * Single blog tag view.
 */
export default createDetailView({
    displayName: 'TagDetail',
    storeKey: 'tags',
    ItemComponent: ({name}) => (
        <div style={styles.container}>
            <h3 style={styles.title}>
                {name}
            </h3>
        </div>
    ),
})
