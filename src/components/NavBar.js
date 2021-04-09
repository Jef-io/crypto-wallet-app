import {
    NavLink
} from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const NavBar = () => {

    const routes = [
        {
            to: "/",
            name: "Portefeuille"
        },
        {
            to: "/history",
            name: "Historique"
        },
        {
            to: "/cryptos",
            name: "Cryptos"
        },
        {
            to: "/trading",
            name: "Transactions"
        }
    ]

    return (
        <nav className="NavBar">
            <IconButton aria-label="logout">
                <PowerSettingsNewIcon fontSize="large"/>
            </IconButton>
            <div className="MenuItems">
                {
                    routes.map((item, id) => 
                        <NavLink key={id} to={item.to} exact activeClassName="SelectedNavLink">
                            {item.name}
                        </NavLink>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar ;