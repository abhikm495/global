import "./App.css";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(itemId) {
    const cartItemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (cartItemIndex === -1) {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { id: itemId, quantity: 1 },
      ]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[cartItemIndex].quantity++;
      setCartItems(updatedCartItems);
    }
    alert("Item added to card");
  }

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div class="card">
      <img
        src="https://media.gettyimages.com/id/186870715/photo/blue-jeans.jpg?s=1024x1024&w=gi&k=20&c=kG0E0bpYNsUaXIAp2gLeMFk1SNrnf4MhSO2x8snuAcY="
        alt="Denim Jeans"
        style={{ width: "100%" }}
      />
      <h1>Tailored Jeans</h1>
      <p class="price">$200</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit natus
        quod voluptates accusantium cupiditate tempore corrupti vitae sapiente
        alias repellat! Ratione excepturi culpa hic at tempore laboriosam,
        cupiditate delectus quibusdam..
      </p>
      <p>
        <button onClick={() => addToCart(1)}>Add to Cart</button>
        <p>Cart Quantity: {totalQuantity}</p>
      </p>
    </div>
  );
}

export default App;
