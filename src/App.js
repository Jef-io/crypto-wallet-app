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
import Cryptos from './pages/Cryptos'
import Trading from './pages/Trading'
import AddCryptos from './pages/AddCryptos'

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
                        <Cryptos />
                    </PrivateRoute>
                    <PrivateRoute path="/trading">
                        <Trading />
                    </PrivateRoute>
                    <PrivateRoute path="/addcryptos">
                        <AddCryptos />
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
