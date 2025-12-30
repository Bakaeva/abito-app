import { useOutletContext, useParams } from "react-router-dom";
import { Side } from "../components/Side/Side"

export const Product = () => {
    const { products } = useOutletContext();
    const { id } = useParams();
    const foundProduct = products.find(c => c.id === +id);

    return (
        <section className="content">
            <div className="container">
                {foundProduct ?
                    <div className="content-box">
                        <div className="content-product">
                            <div className="content-product__info">
                                <h2 className="content-product__info--title">{foundProduct.title}</h2>
                                <div className="content-product__info--img">
                                    <img src={foundProduct.img} alt="product-img" />
                                </div>
                                <p className="content-product__info--descr">
                                    {foundProduct.description}
                                </p>
                            </div>

                            <div className="content-product__info">
                                <h2 className="content-product__info--price">{foundProduct.price}</h2>
                                <button className="btn btn-primary product-info-btn">Показать телефон</button>
                            </div>
                        </div>

                        <Side />
                    </div>
                    :
                    <h2>Такого товара не существует</h2>
                }
            </div>
        </section>
    )
}