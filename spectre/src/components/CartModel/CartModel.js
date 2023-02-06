import React from 'react';
import "./CartModel.scss";
import { shopping_cart } from '../../utils/images';
import { formatPrice } from '../../utils/helpers';

const CartModel = ({carts}) => {
  return (
    <div className='cart-model'>
      <h5 className='cart-model-title fw-5 fs-15 font-manrope text-center'>Recenlty Added Products</h5>
      {
        (carts?.length > 0) ? (
          <div className='cart-model-list grid'>
            {
              carts.map(cart => {
                return (
                  <div className='cart-model-item grid align-center font-manrope py-2' key = {cart.id}>
                    <div className='cart-model-item-img'>
                      <img src = {cart?.thumbnail} alt = "" className='img-cover' />
                    </div>
                    <div className='cart-model-item-title fs-13 font-manrope text-capitalize'>{cart?.title}</div>
                    <div className='cart-model-item-price text-orange fs-14 fw-6'>
                      {formatPrice(cart?.discountedPrice)}
                    </div>
                  </div>
                )
              })
            }

            <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center'>view my shopping cart</div>
          </div>) : (
          <div className = "flex flex-column align-center justify-center cart-model-empty">
            <img src = {shopping_cart} alt = "" className='' />
            <h6 className='text-dark fw-4'>No products yet</h6>
          </div>
        )
      }
    </div>
  )
}

export default CartModel