import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactGA from 'react-ga';

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
import withPageView from '../../components/Parts/withPageView'

const Routes = (props) => {
    const [Session, setSession] = useState(null)
    const dispatch = useDispatch()

    const _login = (objUser) => {dispatch({ 
        type : "LOGIN",
        payload : objUser
    })}

    useEffect(() => {
        const objCookie = JSON.parse(localStorage.getItem('user'))
        // google analutics
        ReactGA.initialize('G-NF3LEQ72W2')
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
                        <Route exact path="/" component={withPageView(Home)} />
                        <Route path="/login" component={withPageView(Login)} />
                        <Route path="/forgotpassword" component={withPageView(ForgotPassword)} />
                        <Route path="/confirmation-email/:id" component={withPageView(ConfirmationEmail)} /> 
                        <Route path="/signup" component={withPageView(Signup)} /> 
                        <Route path="/pricing" component={withPageView(Pricing)} />
                        <Route path="*">
                            <ErrorPage></ErrorPage>
                        </Route>
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/database" />
                        </Route>
                        <Route exact path="/pricing" component={withPageView(Pricing)} />
                        <Route exact path="/database" component={withPageView(Database)} />
                        <Route exact path="/requestconnect" component={withPageView(Requestconnect)} />
                        <Route exact path="/sidreport" component={withPageView(SidReport)} />
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