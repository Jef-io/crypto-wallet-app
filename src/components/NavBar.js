import {
    NavLink
} from "react-router-dom"

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
            {
                routes.map((item, id) => 
                    <NavLink key={id} to={item.to} exact activeClassName="SelectedNavLink">
                        <h3>{item.name}</h3>
                    </NavLink>
                )
            }
        </nav>
    )
}

export default NavBar ;