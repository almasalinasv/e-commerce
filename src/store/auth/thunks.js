import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (userName,password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}