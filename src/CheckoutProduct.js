import React from 'react'
import './CheckoutProduct.css';
import { useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =() =>
    {
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id  
    })
    }

    return (
        <div className="checkoutproduct"  >

           <img src={image}  className="checkoutproduct_image"/>    
           <div className="checkoutproduct_info">

                <p className="checkoutproduct_title" >{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutproduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,i) => (
                                <p> 🌟  </p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
