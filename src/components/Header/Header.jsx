import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <div className="header-logo">
                        <img src="/image/logo.svg" alt="logo" className="logo" />
                        <span>Abito</span>
                    </div>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>
                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}