// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    input: {
        ...classes.transitionParameters,
        transitionProperty: 'outline',
        width: '100%',
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'black',
        backgroundColor: colors.ui.css(),
        color: colors.uiText.css(),
        border: 0,
        paddingTop: 5,
        paddingBottom: 5,

        ':focus': {
            outlineColor: colors.uiText.css(),
        },
    },
}
