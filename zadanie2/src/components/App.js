import './App.scss';
import { useState } from 'react';
import edit from '../images/edit-img.png';
import xButton from '../images/x-img.png';
import headphones from '../images/headphones.png';

const productList = [
  {
    name: 'Headphones',
    price: 11.9,
  },
];

const App = () => {
  const [count, setCount] = useState(1);

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
            <li>
              <article className='product__item'>
                <button className='item__delete'>
                  <img src={xButton} alt='' />
                </button>
                <img className='item__image' src={headphones} alt='headphones' />
                <h2 className='item__title'>{productList[0].name}</h2>
                <p className='item__price'>${productList[0].price}</p>
                <section className='item__quantity'>
                  <button className='item__minus' onClick={() => setCount(count - 1)}>
                    -
                  </button>
                  <input
                    className='item__input'
                    type='text'
                    name='quantity'
                    value={count}
                    // onChange={handleChange}
                  />
                  <button className='item__plus' onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </section>
                <button className='item__edit'>
                  <img src={edit} alt='' />
                </button>
              </article>
            </li>
          </ul>

          <button className='products__update'>Update Shopping Cart</button>
        </section>
      </div>
      <section className='checkout'>
        <button className='checkout__proceed'>Proceed to checkout</button>
        <section className='checkout__shipping'>
          <header className='checkout__header'>
            <h3 className='shipping__title'>Shipping</h3>
            <p className='shipping__price'>$23.80</p>
          </header>
        </section>

        <section className='checkout__cart'>
          <header className='checkout__header'>
            <h3>Cart Totals</h3>
          </header>
          <ul className='checkout__totals'>
            <li className='total__item'>
              <h4 className='subtotal'>Subtotal</h4>
              <p className='subtotal__price'>$23.80</p>
            </li>
            <li className='total__item'>
              <h4 className='grand-total'>Grand Total</h4>
              <p className='grand-total__price'>$23.80</p>
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
