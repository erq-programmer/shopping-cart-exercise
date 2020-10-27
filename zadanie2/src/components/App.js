import './App.scss';
import { useState} from 'react';
import edit from '../images/edit-img.png';
import xButton from '../images/x-img.png';
import headphones from '../images/headphones.png';

const productList = [
  {
    id: 1,
    name: 'Headphones',
    price: 11.9,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Headphones',
    price: 24.4,
    quantity: 2,
  }
]

const App = () => {
  const [cart, setCart] = useState(productList);
  const subtotal = cart.reduce((total, { price = 0, quantity }) => total + price * quantity, 0).toFixed([2]);
  const grandtotal = cart.reduce((total, { price = 0, quantity }) => total + price * quantity, subtotal <= 100 && cart.length !== 0 ? 23.80 : 0).toFixed([2]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

const quantityCount = (currentItem, value) => {
   const updatedCart = cart.map(item => item.id === currentItem.id ? {
     id: item.id,
     name: item.name,
     price: item.price,
     quantity: item.quantity += value,
   } : item);
   setCart(updatedCart);

}
  return (
    <main className='wrapper'>
      <div className='wrapper__product'>
        <h1 className='title'>Shopping Cart</h1>
        <section className='products'>
          <header className='products__category'>
            <ul className='category__list'>
              <li className='category__item category__item--name'>Product Name</li>
              <li className='category__item category__item--unit-price'>Unit Price</li>
              <li className='category__item category__item--qty'>Qty</li>
            </ul>
          </header>

          <ul className='products__list'>
            {cart.map((item) => 
            <li key={item.id}>
            <article className='product__item'>
              <button className='item__delete' onClick={() => removeFromCart(item)}>
                <img src={xButton} alt='' />
              </button>
              <img className='item__image' src={headphones} alt='headphones' />
              <h2 className='item__title'>{item.name}</h2>
              <p className='item__price'>${item.price}</p>
              <section className='item__quantity'>
                <button className='item__minus' onClick={() => quantityCount(item, -1)}>
                  -
                </button>
                <input
                  className='item__input'
                  type='text'
                  name='quantity'
                  value={item.quantity}
                  readOnly
                />
                <button className='item__plus' onClick={() => quantityCount(item, +1)}>
                  +
                </button>
              </section>
              <button className='item__edit'>
                <img src={edit} alt='' />
              </button>
            </article>
          </li>
            )}
          </ul>
          <button className='products__update'>Update Shopping Cart</button>
        </section>
      </div>
      <section className='checkout'>
        <button className='checkout__proceed'>Proceed to checkout</button>
        <section className='checkout__shipping'>
          <header className='checkout__header'>
            <h3 className='shipping__title'>Shipping</h3>
            <p className='shipping__price'>${(subtotal > 100 ? 0 : 23.80).toFixed([2]) }</p>
          </header>
        </section>

        <section className='checkout__cart'>
          <header className='checkout__header'>
            <h3>Cart Totals</h3>
          </header>
          <ul className='checkout__totals'>
            <li className='total__item'>
              <h4 className='subtotal'>Subtotal</h4>
            <p className='subtotal__price'>${subtotal}</p>
            </li>
            <li className='total__item'>
              <h4 className='grand-total'>Grand Total</h4>
              <p className='grand-total__price'>${grandtotal}</p>
            </li>
          </ul>
          <button className='checkout__proceed checkout__proceed--total'>
            Proceed to checkout
          </button>
        </section>
      </section>
    </main>
  );
};

export default App;
