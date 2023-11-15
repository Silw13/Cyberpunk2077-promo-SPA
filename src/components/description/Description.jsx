import './Description.sass'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Description() {

    return (
        <section className='description'>
            <div className='container'>
                <div className='description__text-content'>
                    <h2 className='description__h2'>Найт-Сити изменит тебя навсегда!</h2>
                    <p className='description__txt'><span className='description__txt description__txt_blue'>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
                </div>
                <div className='description__gallery'>
                    <div className='description__gallery-col'>
                        <Zoom>
                            <img className='description__img description__img_size-${pictureSize}' src="./gallery/size L/1.jpg" alt="" />
                        </Zoom>
                        <Zoom>
                            <img className='description__img description__img_size-l' src="./gallery/size L/2.jpg" alt="" />
                        </Zoom>
                    </div>
                    <Zoom>
                        <img className='description__img description__img_size-l' src="./gallery/size L/3.jpg" alt="" />
                    </Zoom>
                </div>
            </div>
        </section>
    )
}