import './sale.css';
import saleImg from './../../image/images/promo-img.jpg'

const Sale = () => {
    return (<section className='sale'>
            <div className="sale__content">
                <div className="sale__img">
                    <img src={saleImg} alt="girl-sale"/>
                </div>
                <div className="sale__text">
                    <div className="sale__title"><span className='highlight'><span>PAYDAY</span></span> SALE NOW</div>
                    <div className="sale__desc">Spend minimal $100 get 30% off voucher code for your next purchase</div>
                    <div className="sale__data"><span>1 June - 10 June 2021 </span>*Terms & Conditions apply</div>
                    <div className="sale__btn-big">
                        <a href="#!" className='sale__btn'>Shop Now</a>
                    </div>
                </div>
            </div>
    </section>);
}

export default Sale;