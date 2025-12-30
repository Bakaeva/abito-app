import './Card.css'
import { Link } from "react-router-dom";

export const Card = ({ id, title, price, location, date, img }) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <div className="card--img">
                <img src={img} alt="card-img" />
            </div>

            <h5 className="card--title">{title}</h5>

            <strong className="card--price">{price}</strong>

            <div className="card--info-box">
                <span className="card--info">{location}</span>
                <span className="card--info">{date}</span>
            </div>
        </Link>
    )
}