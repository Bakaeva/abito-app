import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { Side } from "../components/Side/Side"
import { cardArray } from "../constants"

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" placeholder="Поиск по объявлениям" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn__icon" src="/image/search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>

                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                location={card.location}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <Side />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}