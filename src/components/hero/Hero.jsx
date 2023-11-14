import Hero_slider from "./Hero_slider";
import './Hero.sass'

export default function Hero() {
    return (
        <div className="hero">
            <Hero_slider />
            <div className="container">
                <div className="hero__show-more-block">
                    <div className="hero__show-more-wrapper">
                        <h1 className="hero__h1">Доступно на всех платформах</h1>
                        <button className="button hero__button">Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
