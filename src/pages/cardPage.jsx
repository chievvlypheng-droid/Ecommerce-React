import { UseCart } from "../Context/cartContext";
import { getProductById } from "../data/product";
import NavBar from "../component/navBar";

export default function CardPage() {
  const { cartItem, increment, decrement, removeFromCart, placeOrder } =
    UseCart();

  let grandTotal = 0;
  for (const item of cartItem) {
    const product = getProductById(item.id);
    grandTotal += product.price * item.quantity;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />

      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Your Cart</h1>

        {cartItem.length === 0 ? (
          // CHANGED: empty state, and no Place order button here
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-slate-500">
            Your cart is empty.
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {cartItem.map((item, index) => {
                const product = getProductById(item.id);
                const TotalPrice = product.price * item.quantity;
                const bg = index % 2 === 0 ? "bg-white" : "bg-amber-50";

                return (
                  <div
                    key={item.id}
                    className={`flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 p-4 shadow-sm ${bg}`}
                  >
                    {/* Image */}
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Name + unit price + remove */}
                    <div className="min-w-0 flex-1">
                      <h2 className="truncate font-semibold text-slate-800">
                        {product.name}
                      </h2>
                      <p className="text-sm text-slate-500">
                        ${product.price} each
                      </p>
                      {/* CHANGED: Remove is a text button under the name, <br> deleted */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-1 text-sm font-medium text-red-500 transition hover:text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Quantity stepper */}
                    <div className="flex items-center gap-3">
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-700 transition hover:bg-slate-300"
                        onClick={() => decrement(item.id)}
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-900 transition hover:bg-amber-300"
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Line total */}
                    <p className="w-24 text-right text-lg font-semibold text-slate-800">
                      ${TotalPrice.toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CHANGED: summary card with total and Place order together */}
            <div className="mt-6 rounded-xl bg-slate-800 p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-lg">Total price</span>
                <span className="text-2xl font-bold text-amber-400">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => placeOrder()}
                className="mt-4 w-full rounded-lg bg-amber-400 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
              >
                Place order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
