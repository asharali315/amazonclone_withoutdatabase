import React from 'react';
import './Product.css';
import { Link,useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Product({ id, title, price, rating, image }) 
{
    const [{user},dispatch] = useStateValue();    
    const history = useHistory();
    
    const addToBasket = ()=>
    {
        if(user){
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
               id:id,
               title:title,
               image:image,
               price:price,
               rating:rating
            } 
        })
    }
    else
    {
        history.push('/login');
    }  
    };

    return (
        <div className="product">
            <div className="product_info">
                <p >{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,i) => (
                                <p> 🌟  </p>
                            ))
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>


        </div>
    )
}

export default Product
