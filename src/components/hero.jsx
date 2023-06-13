import "../styles/style.css";
import data from "../data/heroes.json";
import { useParams } from "react-router-dom";

function Hero() {
    const params = useParams();

    const heroId = params.id;

    const hero = data.find((h) => h.id.toString() === heroId);

    if (!hero) {
        return <h1>Герой не найден</h1>;
    }

    return (
        <div>
            <h1 className="card__title">{hero.name}</h1>
            <p className="card__desc">
                <span className="hero-title">Вселенная:</span> {hero.universe}
            </p>
            <p className="card__desc">
                <span className="hero-title">Альтер эго:</span> {hero.alterego}
            </p>
            <p className="card__desc">
                <span className="hero-title">Род деятельности: </span>
                {hero.occupation}
            </p>
            <p className="card__desc">
                <span className="hero-title">Друзья: </span>
                {hero.friends}
            </p>
            <p className="card__desc">
                <span className="hero-title">Суперсилы: </span>
                {hero.superpowers}
            </p>
            <img className="hero-image" src={hero.url} alt="hero" />
            <p className="card__desc">{hero.info}</p>
        </div>
    );
}

export { Hero };
