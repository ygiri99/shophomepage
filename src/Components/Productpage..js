import '../Style/header.css';
import { UserContext, useContext } from '../Context/Context';



const Productpage = () => {

    const { addToCart, state } = useContext(UserContext);
    //Displaying the cards
    return (
        <div>
            <section className="p-5 mx-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {state.cardsDetail.map((card, index) => {
                        if (index === 1 || index === 2 || index === 4 || index === 6) {
                            return (
                                <div className="col mb-4" key={card.id}>
                                    <div className="card h-100">
                                        <div className="badge bg-dark text-white position-absolute">Sale</div>
                                        <img src={card.image} className="card-img-top" alt="card" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{card.title}</h5>
                                            <div className="card-text">
                                                <p className='color'>{card.rating}</p>
                                                <span className="text-decoration-line-through">{card.strikedprice}</span>{card.price}
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-0 text-center p-4">
                                            <button type='button' className="btn btn-outline-dark" disabled={card.disabled} onClick={() => { addToCart(card) }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div >
                            )
                        }
                        else {
                            return (
                                <div className="col mb-4" key={card.id}>
                                    <div className="card h-100">
                                        <img src={card.image} className="card-img-top" alt="card" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{card.title}</h5>
                                            <div className="card-text">
                                                <p>{card.rating}</p>
                                                {card.price}
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-0 text-center p-4">
                                            <button type='button' className="btn btn-outline-dark" disabled={card.disabled} onClick={() => { addToCart(card) }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </section >
        </div >
    )
}

export default Productpage;