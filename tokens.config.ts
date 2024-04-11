import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme({
    alpine: {
        body: {
            backgroundColor: {
                initial: '#ffe9d9',
                dark: '#09090b'
            }
        }
    },
    color: {
        primary: theme.color.orange
    }
})
