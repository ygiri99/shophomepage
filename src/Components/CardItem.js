import React from 'react';
import '../App.css';
import { UserContext, useContext } from '../Context/Context';

export function CardItem(probs) {
    const { card } = probs;
    const { remove } = useContext(UserContext);
    return (
        //Display the card in cart
        <section className="p-5 mx-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-4" key={card.id}>
                    <div className="card h-100">
                        <img src={card.image} className="card-img-top" alt="card" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{card.title}</h5>
                            <div className="card-text">
                                <p>{card.rating}</p>
                            </div>
                        </div>
                        <div className="card-footer border-top-0 text-center p-4">
                            <button type='button' className="btn btn-outline-dark" disabled={false} onClick={() => { remove(card) }}>remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
