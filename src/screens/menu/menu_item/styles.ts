import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native'
import getPlatformFont from '../../../assets/fonts/getFontByPlatform'
import {PRIMARY_COLOR} from '../../../assets/colors'

export interface Style {
    container: ViewStyle
    contentContainer: ViewStyle
    menuImgContainer: ViewStyle
    img: ImageStyle
    menuTextContainer: ViewStyle
    menuText: TextStyle
    bottomDivider: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        flexDirection: 'row'
    },
    menuImgContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    img: {
        width: 80,
        height: 80
    },
    menuTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingStart: 8,
        paddingEnd: 16
    },
    menuText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'white',
        fontSize: 20
    },
    bottomDivider: {
        width: '100%',
        height: 2,
        backgroundColor: 'white'
    }
})

export default styles
