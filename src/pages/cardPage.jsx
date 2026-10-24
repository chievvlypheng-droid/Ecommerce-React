import { UseCart } from "../Context/cartContext";
import { getProductById } from "../data/product";
export default function CardPage() {
  const { cartItem } = UseCart();
  return (
    <div>
      {cartItem.map((item) => {
        const product = getProductById(item.id);
        const TotalPrice = (product.price * item.quantity).toFixed(2);

        return (
          <div key={item.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>${TotalPrice}</p>
          </div>
        );
      })}
    </div>
  );
}
