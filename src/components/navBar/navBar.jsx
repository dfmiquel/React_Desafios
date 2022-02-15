import styles from './navBar.css';
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../cartWidget/cartWidget.jsx'

export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <h1>MovieFan</h1>
            <p>
                La Página de los Fanáticos de las Películas!!!!!
            </p>

            <html>
                <head>
                </head>
                <body>
                    <ul className={styles.listaMenu}>
                        <li>
                            <NavLink
                                exact
                                className={styles.link}
                                activeClassName={styles.activeLink}
                                to="/"
                            >
                                Home
                            </NavLink>
                            {/* <Link to={"/"}>Inicio</Link> */}
                        </li>
                        <li><Link to={"/products"}>Productos</Link></li>
                        <li><Link to={"/category"}>Categorias</Link></li>
                        <li><Link to={"/cart"}>Carrito</Link></li>
                        <li><Link to={"/abautUs"}>Sobre Nosotros</Link></li>
                        <CartWidget />
                    </ul>
                </body>
            </html>

        </nav>
    )
}