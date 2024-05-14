import React from "react";

const Cart = ({ cart, onClick, setCart }) => {
  const deleteToCart = (id) => {
    const element = cart.filter((item) => item.id !== id);
    setCart(element);
  };
  return (
    <div>
      <h1>Cart:</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={`${item.id}-${Math.random() * 100}`}>
              <div>
                <a href="#">
                  <img class="rounded-t-lg" src={item.thumbnail} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5>
                      {item.title}
                    </h5>
                  </a>
                  <p>
                    {item.description}
                  </p>
                  <button
                    onClick={() => onClick(item)}
                  >
                    Add to cart
                  </button>
                  <button onClick={() => deleteToCart(item.id)}>
                    delete ToCart
                  </button>
                </div>
              </div>
              <br />
              <br />
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Cart;
