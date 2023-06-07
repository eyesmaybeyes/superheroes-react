import "../styles/style.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import heroes from "../data/heroes-page.json";
import data from "../data/heroes.json";

function HeroPage({ match }) {
    // Проверьте, есть ли такой герой
    const hero = data.find((h) => h.id.toString() === match.params.id);

    if (!hero) {
        return <h1>Герой не найден</h1>;
    }

    return (
        <div>
            <h1>{hero.name}</h1>
            {/* Остальные данные героя... */}
        </div>
    );
}

function Card() {
    return (
        <Router>
            <div className="card">
                <h1 className="card__title">Супергерои</h1>
                <p className="card__desc">
                    Ниже представлен список лучших супергероев за всё время.
                    Здесь вы найдете полную информацию о вашем любимом герое —
                    сфера деятельности, суперсила, друзья, картинки, фильмы в
                    которых они участвовали и многое другое.
                </p>
                <div className="card-container__images">
                    {heroes.map((item) => (
                        <div className="card-hero" key={item.id}>
                            <img
                                className="card-hero__image"
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/" +
                                    item.url
                                }
                                alt="superhero"
                            />
                            <Link
                                to={`/hero/${item.id}`}
                                className="card-hero__desc"
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Routes>
                {data.map((hero) => (
                    <Route key={hero.id} path={`/hero/${hero.id}`}>
                        <div className="hero-info">
                            <h2>{hero.name}</h2>
                            <p>Sphere of activity: {hero.sphere}</p>
                            <p>Superpower: {hero.superpowers}</p>
                            <ul>
                                {hero.movies.map((movie) => (
                                    <li key={movie}>{movie}</li>
                                ))}
                            </ul>
                        </div>
                    </Route>
                ))}
            </Routes> */}
        </Router>
    );
}

export { Card };
