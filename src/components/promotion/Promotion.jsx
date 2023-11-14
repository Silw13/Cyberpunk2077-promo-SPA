import './Promotion.sass'

export default function Promotion() {
    return (
        <section className="promotion">
            <div className='promotion__top'></div>
            <div className="promotion__content">
                <div className="container">
                    <img className="promotion__label" src="./promo_label.svg" alt="" />
                    <h2 className="promotion__h2">Играй и выигрывай!</h2>
                    <p className="promotion__txt">Играй в <span className="promotion__txt promotion__txt_blue">Cyberpunk 2077</span> и получи возможность выиграть консоль <span className="promotion__txt promotion__txt_blue">Xbox Series X</span> или <span className="promotion__txt promotion__txt_blue">Sony PlayStation 5</span>! Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                    <div className='promotion__input-panel'>
                        <div className='promotion__input-forms'>
                            <input className='promotion__input-txt' type="text" placeholder='Как тебя зовут' />
                            <input className='promotion__input-txt' type="text" placeholder='Твой е-mail' />
                            <label class="promotion__custom-file-upload">
                                <input className='promotion__input-img' type="file" accept="image/png, image/jpeg, image/jpg, image/pdf" />
                                <div class="promotion__custom-file-wrapper">
                                    <p className='promotion__custom-file-upload-txt'>Прикрепить скриншот</p>
                                    <p className='promotion__custom-file-upload-txt promotion__custom-file-upload-txt_size-s'>.png / .jpg / .pdf</p>
                                </div>
                            </label>
                            <div>
                                <button className='promotion__button'>Отправить</button>
                            </div>
                            <label className='promotion__chk-input-label'><input type="checkbox" name="" id="" />Согласен на обработку персональных данных</label>
                        </div>
                        <img className='promotion__img' src="./promo_pic.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='promotion__bottom'></div>
        </section>
    )
}


