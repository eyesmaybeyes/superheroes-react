import data from "../data/heroes.json";
import { useParams } from "react-router-dom";

function Hero({ match }) {
    const params = useParams();

    const heroId = params.id;

    const hero = data.find((h) => h.id.toString() === heroId);

    if (!hero) {
        return <h1>Герой не найден</h1>;
    }

    return (
        <div>
            <h1>{hero.name}</h1>
            <p>Вселенная: {hero.universe}</p>
            <p>Альтер Эго: {hero.alterego}</p>
            <p>Род деятельности: {hero.occupation}</p>
            <p>Друзья: {hero.friends}</p>
            <p>Суперсилы: {hero.superpowers}</p>
            <img src={hero.url} alt="hero" />
            <p>{hero.info}</p>
        </div>
    );
}

export { Hero };
