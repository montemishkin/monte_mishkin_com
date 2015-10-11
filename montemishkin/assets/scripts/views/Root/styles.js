// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    container: {
        ...classes.dark_font_color,
        ...classes.main_font_size,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.grey.white,
        fontFamily: 'Lato',
    },

    content: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: colors.grey.bg,
    },
}


// end of file
