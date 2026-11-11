import './favorite.css';
import Card from "../card/Card";
import cat01Img from "../../image/images/promo-01.jpg";
import cat02Img from "../../image/images/promo-02.jpg";

const Favorite = () => {
    return (<section className='favorite'>
        <div className="container">
            <div className="favorite__header">
                <h2 className="title-2">Young’s Favourite</h2>
            </div>
            <div className="favorite__cards">
                <Card title='Trending on instagram' img={cat01Img} />
                <Card title='All Under $40' img={cat02Img} />
            </div>
        </div>
    </section>);
}

export default Favorite;