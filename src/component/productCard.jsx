import { Link } from "react-router-dom";
import { UseCart } from "../Context/cartContext";
export default function ProductCard({ product }) {
  const { addToCart, cartItem } = UseCart();
  const productInCart = cartItem.find((item) => item.id === product.id);

  const ItemInCart = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div>
        <img src={product.image} />
      </div>

      <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
      <div class="gap-4 flex flex-row ">
        <Link to={`/products/${product.id}`} class="bg-red-200 rounded-lg p-2 ">
          Product Detail
        </Link>
        <button
          class="bg-blue-200 rounded-lg p-2 "
          onClick={() => addToCart(product.id)}
        >
          Add to card {ItemInCart}
        </button>
      </div>
    </div>
  );
}
