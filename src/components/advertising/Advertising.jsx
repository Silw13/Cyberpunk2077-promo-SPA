import './Advertising.sass'

export default function Advertising() {
    return (
        <section className='advertising'>
            <div className='container'>
                <div className='advertising__content'>
                    <div className='advertising__img-block'>
                        <img className='advertising__main-img' src="./advertising_img.png" alt="" />
                        <div className='advertising__img-row'>
                            <img src="./advertising_hp-logo.svg" alt="" />
                            <img src="./advertising_cross.svg" alt="" />
                            <img src="./Cyberpunk_2077_logo.svg" alt="" />
                        </div>
                    </div>
                    <div className='advertising__txt-block'>
                        <h2 className='advertising__h2'>Полное погружение вместе с HP</h2>
                        <p className='advertising__txt'>Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!</p>
                        <ul className='advertising__list'>
                            <li className='advertising__list-item'><img src="./advertising icons/color_lens.svg" alt="" />Яркие насыщенные цвета</li>
                            <li className='advertising__list-item'><img src="./advertising icons/auto_awesome.svg" alt="" />Кристальная четкость изображения</li>
                            <li className='advertising__list-item'><img src="./advertising icons/auto_awesome_motion.svg" alt="" />Быстрые движения и плавный геймплей</li>
                        </ul>
                        <button className='advertising__button'>Подробнее</button>
                    </div>
                </div>
            </div>
        </section>
    )
}