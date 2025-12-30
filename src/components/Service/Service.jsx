import './Service.css'

export const Service = ({ title, info, img }) => {
    return (
        <div className="service">
            <img className="service--img" src={img} alt="side-info" />
            <h5 className="service--title">{title}</h5>
            <p className="service--info">{info}</p>
        </div>
    )
}
