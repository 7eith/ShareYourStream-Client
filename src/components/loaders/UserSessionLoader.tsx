import { AppDispatch, RootState } from "@/index";
import { fetchProfileAction } from "@/store/actions/user/fetchProfileAction";
import { AUTH_SET_TOKENS } from "@/store/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserSessionLoader = () => {

    const dispatch: AppDispatch = useDispatch();
    const { accessToken } = useSelector((state: RootState) => state.auth);
    
    useEffect(() => {
        let localStoredToken = localStorage.getItem("token")
        let localStoredRefreshToken = localStorage.getItem("refreshToken")

        if (localStoredToken && !accessToken) {
            dispatch({ type: AUTH_SET_TOKENS, payload: { accessToken: localStoredToken, refreshToken: localStoredRefreshToken }})
        }
    })

    useEffect(() => {
        if (accessToken)
            dispatch(fetchProfileAction())
    }, [accessToken])

    return null;
}

export default UserSessionLoader;