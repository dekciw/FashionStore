import './community.css'

const Community = () => {
    return (
        <section className='community'>
            <div className="community__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
            <div className="community__desc">Type your email down below and be young wild generation</div>
            <div className="community__input">
                <form>
                    <label>
                        <input type="email" placeholder='Add your email here' required />
                    </label>
                    <button className='community__btn' type={"submit"}>SEND</button>
                </form>
            </div>
        </section>)
};

export default Community;