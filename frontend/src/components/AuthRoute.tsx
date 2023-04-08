import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export interface IAuthRouteProps {
    children: React.ReactNode
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
        return () => {
            AuthCheck()
        }
    },[auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
            navigate('/dashboard')
        } else {
            setLoading(true);
            navigate('/login')
        }
    })

    return (
    <>
    {children}
    </>
  )
}

export default AuthRoute