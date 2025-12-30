import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useState, useEffect } from "react"
import { cardArray } from "../constants";

export const Layout = () => {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);

    const handlerSearch = (event) => {
        setSearchText(event.target.value);
    }

    const handlerSearchArray = (event) => {
        setProducts(cardArray.filter(c =>
            c.title.toLowerCase().includes(searchText.toLowerCase()) ||
            c.price.toLowerCase().includes(searchText.toLowerCase())
        ));
    }

    useEffect(() => {
        setProducts(cardArray);
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Поиск по объявлениям"
                                value={searchText}
                                onChange={handlerSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={handlerSearchArray}>
                                <img className="search-btn__icon" src="/image/search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{ products }} />
            </main>
        </>
    )
}