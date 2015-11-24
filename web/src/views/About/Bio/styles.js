// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


export default {
    container: {
        // padding: `${contentVerticalPadding}px 0`,

        // TODO: put these stylings on the sections' inner content
        //       you should probably also do this for items in WideList
        // width: contentWidth,
        // maxWidth: contentMaxWidth,
    },


    section: {
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 100,
    },


    sectionTitle: {
        ...classes.largeFontSize,
        padding: '15px 0',
    },


    p: {
        padding: '20px 0',
    },


    list: {
        listStyleType: 'unset',
        paddingLeft: 40,
    },


    listItem: {},


    logoList: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },


    logoListItem: {
        width: '20%',
        minWidth: 100,

        ':hover': {
            backgroundColor: 'grey',
        },
    },


    link: {
        ...classes.linkHoverable,
        color: colors.text.brighten(2).css(),
    },
}