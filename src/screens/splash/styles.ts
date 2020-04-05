import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import getPlatformFont from '../../assets/fonts/getFontByPlatform'
import { colors } from '../../assets/colors'

export interface Style {
    container: ViewStyle
    versionContainer: ViewStyle
    versionText: TextStyle
    logo: ImageStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    versionContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 16,
    },
    versionText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'white',
        fontSize: 16,
    },
    logo: {
        width: 200,
        height: 200,
    },
})

export default styles
