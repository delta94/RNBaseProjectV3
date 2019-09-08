import {StyleSheet, TextStyle, ViewStyle} from 'react-native'
import getPlatformFont from '../../assets/fonts/getFontByPlatform'
import {PRIMARY_COLOR} from '../../assets/colors'

export interface Style {
    container: ViewStyle
    errorContainer: ViewStyle
    errorText: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    errorText: {
        ...getPlatformFont('quicksand_bold'),
        color: PRIMARY_COLOR,
        fontSize: 18
    }
})

export default styles
