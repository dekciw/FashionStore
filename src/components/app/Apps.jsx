import './apps.css'

import appStoreImg from './../../image/icons/app-store.png';
import googlePlayImg from './../../image/icons/google-play.png';
import phoneImg from './../../image/images/vouchers-img.png';

const Apps = () => {
    return (<section className="apps">
        <div className="container">
            <div className="apps__content">
                <div className="apps__text">
                    <div className="apps__title">DOWNLOAD APP & GET THE VOUCHER!</div>
                    <div className="apps__desc">Get 30% off for first transaction using Rondo vision mobile app for now.</div>
                    <div className="apps__actions">
                        <a href="#!">
                            <img src={appStoreImg} alt="App Store download"/>
                        </a>
                        <a href="#!">
                            <img src={googlePlayImg} alt="Google play download"/>
                        </a>
                    </div>
                </div>
                <div className="apps__img">
                    <img src={phoneImg} alt="phone"/>
                </div>
            </div>
        </div>
    </section>)
};

export default Apps;