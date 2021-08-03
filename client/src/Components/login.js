import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'
import logo from './logo1.jpeg';
import logo2 from './Envi2.png';
const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src={logo} alt="envi-media logo" height="100px"></img>
                <img src={logo2} alt="envi-media logo" height="100px" alt="fb text"/>
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login