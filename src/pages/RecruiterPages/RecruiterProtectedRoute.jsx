import { Navigate, Outlet } from "react-router-dom"


const RecruiterProtectedRoute = () => {
 const RecruiterToken = localStorage.getItem("recruiter")
 return RecruiterToken ? <Outlet /> : <Navigate to="/" replace />
}

export default RecruiterProtectedRoute
