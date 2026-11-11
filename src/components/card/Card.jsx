import './card.css'

import cat01Img from './../../image/categories/cat-01.jpg'
import arrowImg from './../../image/icons/arrow.svg'

const Card = (props) => {
    return ( <div className='card'>
        <a href="#!" className='card__link'> </a>
        <img className='card__img' src={props.img} alt="card" />
        <div className="card__body">
            <div className="card__text">
            <div className="card__title">{props.title}</div>
            <div className="card__muted">Explore Now!</div>
        </div>
        <div className="card__icon">
            <img src={arrowImg} alt="arrow" />
        </div>
        </div>
    </div> );
}
 
export default Card;