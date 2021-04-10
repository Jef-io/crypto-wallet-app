import {
    NavLink
} from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const NavBar = () => {

    const routes = [
        {
            to: "/cryptos",
            name: "Mes cryptos",
            color: "Green"
        },
        {
            to: "/",
            name: "Mon portefeuille",
            color: "Blue"
        },
        {
            to: "/trading",
            name: "Transactions",
            color: "Red"
        },
        {
            to: "/history",
            name: "Historique",
            color: "Blue"
        }
    ]

    return (
        <nav className="NavBar">
            <IconButton color="secondary" aria-label="logout">
                <PowerSettingsNewIcon fontSize="large"/>
            </IconButton>
            <div className="MenuItems">
                {
                    routes.map((item, id) => 
                        <NavLink key={id} to={item.to} exact activeClassName={`SelectedNavLink${item.color}`}>
                            {item.name}
                        </NavLink>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar ;