import './brands.css'

import hm from '../../image/brands/HM.png'
import obey from '../../image/brands/Obey.png'
import shopify from '../../image/brands/Shopify.png'
import lacoste from '../../image/brands/Lacoste.png'
import levis from '../../image/brands/Levis.png'
import amazon from '../../image/brands/Amazon.png'

const Brands = () => {
    return ( <section className='brands'>
        <div className="container">
            <ul className='brands__list'>
                <li><img src={hm} alt="H&M" /></li>
                <li><img src={obey} alt="obey" /></li>
                <li><img src={shopify} alt="shopify" /></li>
                <li><img src={lacoste} alt="lacoste" /></li>
                <li><img src={levis} alt="levis" /></li>
                <li><img src={amazon} alt="amazon" /></li>
            </ul>
        </div>
    </section> );
}
 
export default Brands;