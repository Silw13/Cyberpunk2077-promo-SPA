import './Buy.sass'

export default function Buy() {
    return (
        <section className='buy'>
            <div className='buy__container buy__content'>
                <div className='buy__img'>
                    <img src="./buy_size-l.jpg" alt="" />
                </div>
                <div className='buy__txt-content'>
                    <div className='buy__txt-content-wrapper'>
                        <h2 className='buy__h2'>Купить игру <br />Cyberpunk 2077</h2>
                        <h3 className='buy__h3'>В комплект входит:</h3>
                        <ul className='buy__list'>
                            <li className='buy__list-item'><img src="./buy icons/disk.svg" alt="" />Футляр с игровыми дисками</li>
                            <li className='buy__list-item'><img src="./buy icons/wysiwyg.svg" alt="" />Футляр с кодом для загрузки игры и дисками (pc)</li>
                            <li className='buy__list-item'><img src="./buy icons/collections.svg" alt="" />Справочник с информацией об игровом мире</li>
                        </ul>
                        <h3 className='buy__h3'>Выберите платформу:</h3>
                        <div className='buy__platforms'>
                            <div className='buy__row'>
                                <img className='buy__row-item' src="./buy platforms/PC.svg" alt="" />
                                <img className='buy__row-item' src="./buy platforms/xbox-one-3 logo.svg" alt="" />
                            </div>
                            <div className='buy__row'>
                                <img className='buy__row-item' src="./buy platforms/g13831.svg" alt="" />
                                <img className='buy__row-item' src="./buy platforms/Playstation logo.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}