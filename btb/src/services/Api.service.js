import { store } from "../Store/store"
import { selectUser } from "../Store/User/User.selectors"

export const apiUrl = process.env.REACT_APP_API_URL

export const getAuthorizationHeaders = () => {
    const state = store.getState()
    const user = selectUser(state)
    if (user) {
        return {
            'autorization': `Bearer ${user.accessToken}`
        }
    }
    return {}
}