import './Header.sass'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <div className="header__content">
                        <img className="header__logo" src="./Cyberpunk_2077_logo.svg" alt="Логотип Киперпанк 2077" />
                        <div className='header__social-media-block'>
                            <img className='header__social-media-icon' src="./social media icons/youtube logo.svg" alt="Логотип Ютуб" />
                            <img className='header__social-media-icon' src="./social media icons/vk logo.svg" alt="Логотип ВК" />
                            <img className='header__social-media-icon' src="./social media icons/facebook-rect logo.svg" alt="Логотип Фейсбук" />
                            <img className='header__social-media-icon' src="./social media icons/twitter-square logo.svg" alt="Логотип Твиттер" />
                            <img className='header__social-media-icon' src="./social media icons/twitch logo.svg" alt="Логотип Твич" />
                            <img className='header__social-media-icon' src="./social media icons/instagram-square logo.svg" alt="Логотип Инстаграмм" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}       