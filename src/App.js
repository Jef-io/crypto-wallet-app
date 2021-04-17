import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import NavBar from './components/NavBar'
import Login from './pages/Login'
import Wallet from './pages/Wallet'
import History from './pages/History'
import FollowedCryptos from './pages/FollowedCryptos'
import Trading from './pages/Trading'
import AddFollowedCryptos from './pages/AddFollowedCryptos'
import DeclareCryptosWallet from './pages/DeclareCryptosWallet'

import { GreenRedTheme } from './css/CustomTheme';
import { ThemeProvider } from '@material-ui/styles';

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute exact path="/">
                        <Wallet />
                    </PrivateRoute>
                    <PrivateRoute path="/history">
                        <History />
                    </PrivateRoute>
                    <PrivateRoute path="/cryptos">
                        <FollowedCryptos />
                    </PrivateRoute>
                    <PrivateRoute path="/trading">
                        <Trading />
                    </PrivateRoute>
                    <PrivateRoute path="/addfollowedcryptos">
                        <AddFollowedCryptos />
                    </PrivateRoute>
                    <PrivateRoute path="/declarecryptoswallet">
                        <DeclareCryptosWallet />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    )
}

const PrivateRoute = ({children}) => {
    return (
        // sessionStorage.getItem('authorization') ?
        true ?
        <Route>
            <ThemeProvider theme={GreenRedTheme}>
                <NavBar />
                {children}
            </ThemeProvider>
        </Route>
         :
        <Redirect
            to={{
            pathname: "/login",
            }}
        />
    )
}

export default App;
