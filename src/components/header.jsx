import "../styles/style.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <a className="header__link_marvel" href="https://www.marvel.com/">
                Marvel
            </a>
            <Link to={`/`} className="header-title">
                Best Superheroes of All-Time
            </Link>
            <a className="header__link_dc" href="https://www.dc.com/">
                DC
            </a>
        </header>
    );
}

export { Header };
