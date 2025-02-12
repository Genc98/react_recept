import { useUser } from "./UserContext";

function Cart() {
  const {cart} = useUser();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No recipe added</p>
      ) : (
        <ul>
          {cart.map((movie, index) => (
            <li key={index}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
