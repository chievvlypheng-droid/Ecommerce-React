import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/product";
import NavBar from "../component/navBar";
import { useEffect } from "react";
import { UseCart } from "../Context/cartContext";

export default function ProductDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const foundProduct = getProductById(id);
  const { addToCart, cartItem } = UseCart();

  const productInCart = cartItem.find((item) => item.id === foundProduct.id);

  const ItemInCart = productInCart ? `(${productInCart.quantity})` : "";

  useEffect(() => {
    if (!foundProduct) {
      navigate("/");
    }
  }, [foundProduct, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          ← Back to Home
        </button>

        {/* Product details */}
        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          {/* Product image */}
          <div className="flex items-center justify-center rounded-xl bg-gray-50 p-6">
            <img
              src={foundProduct.image}
              alt={foundProduct.name}
              className="h-80 w-full object-contain"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Product Details
            </p>

            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {foundProduct.name}
            </h1>

            <p className="mb-6 leading-7 text-gray-600">
              {foundProduct.description}
            </p>

            <p className="mb-8 text-3xl font-bold text-blue-600">
              ${foundProduct.price}
            </p>

            <button
              onClick={() => addToCart(foundProduct.id)}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:w-auto"
            >
              Add to Cart {ItemInCart}
            </button>

            <p className="mt-4 text-sm text-gray-500">
              ✓ Product available for purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
