// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


// base styling for tab titles
const tabTitleBase = {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    padding: 20,
    cursor: 'pointer',
    ...classes.linkHoverable,
}


export default {
    tabList: {
        listStyleType: 'none',
        display: 'flex',
    },


    tabListItem: {
        flexGrow: 1,
        display: 'flex',
    },


    tabTitle: {
        ...tabTitleBase,
    },


    tabTitleActive: {
        ...tabTitleBase,
        backgroundColor: chroma(colors.textInverse).darken().css(),
    },
}
