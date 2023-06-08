import '../styles/style.css'

function Header() {
    return (
            <header className="header">
                <a className="header__link_marvel" href="https://www.marvel.com/">Marvel</a>
                <p className="header-title">Best Superheroes of All-Time</p>
                <a className="header__link_dc" href="https://www.dc.com/">DC</a>
            </header>
    )
}

export {Header};