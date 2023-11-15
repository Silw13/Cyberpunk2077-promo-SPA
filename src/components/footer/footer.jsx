import './footer.sass'

export default function Footer() {
    return (
        <footer className="footer">
            <div className='container'>
                <div className='footer__content'>
                    <div className='footer__logo-block'>
                        <img src="./Cyberpunk_2077_logo.svg" alt="" />
                        <img src="./CD_Projekt_logo 1.svg" alt="" />
                    </div>
                    <div className='footer__txt-block'>
                        <span className='footer__txt'>Лицензия</span>
                        <span className='footer__txt'>Политика конфиденциальности</span>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                <span>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</span>
            </div>
        </footer>
    )
}