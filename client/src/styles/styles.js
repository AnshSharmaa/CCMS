import { makeStyles } from '@material-ui/core/styles';
import mcgpalette0 from "../styles/colors";

const styles =  makeStyles({
    customButton: {
        marginLeft:5,
        marginRight:5,
        color: mcgpalette0['text-color-light'],
    },
    customButtonSecondary: {
        marginLeft:5,
        marginRight:5,
        color: mcgpalette0['text-color-dark'],
    },
    customButtonContained: {
        marginLeft:5,
        marginRight:5,
        color: mcgpalette0['text-color-light'],
        backgroundColor: mcgpalette0['primary-color'],
        '&:hover': {
        backgroundColor: mcgpalette0['primary-color-light']
        }
    },
    customButtonContainedSecondary: {
        marginLeft:5,
        marginRight:5,
        color: mcgpalette0['text-color-dark'],
        backgroundColor: mcgpalette0['secondary-color'],
        '&:hover': {
        backgroundColor: mcgpalette0['secondary-color-light']
        }
    },
    customLightText: {
        color: mcgpalette0['text-color-light'],
    },
    customDarkText: {
        color: mcgpalette0['text-color-dark'],
    },
    customBackground: {
        backgroundColor: mcgpalette0['background-color']
    },
    customBackground2: {
        backgroundColor: mcgpalette0['background-color-2']
    },
    customBackground3: {
        backgroundColor: mcgpalette0['background-color-3']
    }
})
export default styles;