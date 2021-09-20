//custom hooks
import {useMediaQuery} from 'react-responsive'

function useIsDesktopOrLaptop() {
    return useMediaQuery({
        query: '(min-width: 420px)'
    })
}

export {useIsDesktopOrLaptop}