import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({children}){
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        alert('redirecting to login');
        return <Navigate to='/login' replace/>
        
    }
    return children
}