import { Navigate, Outlet } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const ProtectRoute = ({ isAllowed, children }) => {
    console.log(isAllowed)
    if (!isAllowed) {
        return <Navigate to="/" />
    }

    return (
        children ? children : <Outlet/>
    )
}