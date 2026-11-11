import './footer.css'

import fbIcons from '../../image/socials/fb.svg'
import instIcons from '../../image/socials/inst.svg'
import twIcons from '../../image/socials/tw.svg'
import inIcons from '../../image/socials/in.svg'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer__block">
                    <div className="footer__info">
                        <div className="footer__logo">FASHION</div>
                        <div className="footer__desc">Complete your style with awesome clothes from us.</div>
                        <div className="footer__social">
                            <a href="#!">
                                <img src={fbIcons} alt="facebook"/>
                            </a>
                            <a href="#!">
                                <img src={instIcons} alt="instagram"/>
                            </a>
                            <a href="#!">
                                <img src={twIcons} alt="twitter"/>
                            </a>
                            <a href="#!">
                                <img src={inIcons} alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                    <nav className="footer__menu">
                        <div className="footer__items">
                            <span>Company</span>
                            <ul>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Contact us</a></li>
                                <li><a href="#!">Support</a></li>
                                <li><a href="#!">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer__items">
                            <span>Quick Link</span>
                            <ul>
                                <li><a href="#!">Share Location</a></li>
                                <li><a href="#!">Orders Tracking</a></li>
                                <li><a href="#!">Size Guide</a></li>
                                <li><a href="#!">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer__items">
                            <span>Legal</span>
                            <ul>
                                <li><a href="#!">Terms & conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    )
};

export default Footer;