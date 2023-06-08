import "../styles/style.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import heroes from "../data/heroes.json";

function Card() {
    return (
        <div className="card">
            <h1 className="card__title">Супергерои</h1>
            <p className="card__desc">
                Ниже представлен список лучших супергероев за всё время. Здесь
                вы найдете полную информацию о вашем любимом герое — сфера
                деятельности, суперсила, друзья, картинки, фильмы в которых они
                участвовали и многое другое.
            </p>
            <div className="card-container__images">
                {heroes.map((item) => (
                    <div className="card-hero" key={item.id}>
                        <img
                            className="card-hero__image"
                            src={
                                process.env.PUBLIC_URL + "/images/" + item.image
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
    );
}

export { Card };
