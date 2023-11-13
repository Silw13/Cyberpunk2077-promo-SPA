import Hero_slider from "./Hero_slider";

export default function Hero() {
    return (
        <div className="hero">
            <Hero_slider />
            <div className="container">
                <div className="hero__show-more-block">
                    <h1 className="hero__h1"></h1>
                    <button className="hero__button">Узнать больше</button>
                </div>
            </div>
        </div>
    )
}
