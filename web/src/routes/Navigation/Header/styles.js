// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {contentWidth, contentMaxWidth} from 'assets/styles/js/numerics'


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },


    innerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },


    link: {
        ...classes.interactive.primary,
        color: colors.primary.inverse,
        display: 'inline-block',
        textDecoration: 'none',
        padding: '15px 20px',
    },
}
