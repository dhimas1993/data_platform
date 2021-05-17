import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Home from '../../pages/Landingpage/Home'
import Login from '../../pages/Landingpage/Login'
import ForgotPassword from '../../pages/Landingpage/ForgotPassword'
import Signup from '../../pages/Landingpage/Signup'
import Pricing from '../../pages/Landingpage/Pricing'
import Database from '../../pages/Dashboard/Database'
import Requestconnect from '../../pages/Dashboard/Requestconnect'
import SidReport from '../../pages/Dashboard/SidReport'
import Notifpopupupgrade from '../../pages/Landingpage/Notifpopupupgrade'
import Dashboard from '../../pages/Dashboard/Dashboard'
import ConfirmationEmail from '../../components/Parts/ConfirmationEmail'
import ErrorPage from '../../components/Parts/404'

const Routes = (props) => {
    const [Session, setSession] = useState(null)
    const dispatch = useDispatch()

    const _login = (objUser) => {dispatch({ 
        type : "LOGIN",
        payload : objUser
    })}

    useEffect(() => {
        const objCookie = JSON.parse(localStorage.getItem('user'))
        // console.log(JSON.parse(localStorage.getItem('user')))
        if (objCookie !== null) {
            {_login(objCookie)}
            setSession(objCookie)
        } else {
            console.log('cookie2', objCookie)
        }
    }, [])

    return (
        <Router>
            {
                Session == null ? (
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/forgotpassword">
                            <ForgotPassword></ForgotPassword>
                        </Route>
                        <Route path="/confirmation-email/:id">
                            <ConfirmationEmail></ConfirmationEmail>
                        </Route>
                        <Route path="/signup">
                            <Signup></Signup>
                        </Route>
                        <Route path="/pricing">
                            <Pricing></Pricing>
                        </Route>
                        <Route path="*">
                            <ErrorPage></ErrorPage>
                        </Route>
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/database" />
                        </Route>
                        <Route path="/pricing">
                            <Pricing></Pricing>
                        </Route>
                        <Route path="/database">
                            <Database></Database>
                        </Route>
                        <Route path="/requestconnect">
                            <Requestconnect></Requestconnect>
                        </Route>
                        <Route path="/sidreport">
                            <SidReport></SidReport>
                        </Route>
                        <Route path="/notifpopupupgrade">
                            <Notifpopupupgrade></Notifpopupupgrade>
                        </Route>
                        <Route path="*">
                            <ErrorPage></ErrorPage>
                        </Route>
                    </Switch>
                )
            }
        </Router>
    )
}
export default Routes