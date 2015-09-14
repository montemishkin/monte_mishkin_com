/**
 * Style sheet for TagList component.
 */

/* local imports */
import classes from '../../../styles/classes'


// define style sheet
let styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        ...classes.small_font_size,
    },

    image: {
        height: 15,
    },

    names_list: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: 3,
        paddingRight: 3,
        display: 'flex',
        flexWrap: 'wrap',
    },

    names_list_item: {
        marginLeft: 3,
        marginRight: 3,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
    },

    link: {
        ...classes.link_hoverable,
        ...classes.darker_font_color,
    },
}


// export style sheet
export default styles


// end of file