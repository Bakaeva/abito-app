import './Side.css'
import { Service } from '../Service/Service'
import { serviceArray } from '../../constants'

export const Side = () => {
    return (
        <div className="content-side">
            <h3 className="content-side__title">Сервисы и услуги</h3>
            <div className="content-side__list">
                {
                    serviceArray.map(serv => (
                        <Service key={serv.id}
                            title={serv.title}
                            info={serv.info}
                            img={serv.img}
                        />
                    ))
                }
            </div>
            <div className="content-side__footer">
                <p className="content-side__footer--item">© ООО «Абито», 2011–2025</p>
                <a href="#!" className="content-side__footer--item">Политика конфиденциальности</a>
                <a href="#!" className="content-side__footer--item">Обработка данных</a>
            </div>
        </div>
    )
}