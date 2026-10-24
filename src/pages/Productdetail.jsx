import { Link, useParams } from "react-router-dom";
import { getProducts } from "../data/product";
import NavBar from "../component/navBar";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProducts().find((i) => String(i.id) === id);
  if (!product) {
    return (
      <div>
        <Link to="/"> Return Home page</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <div className="mx-auto max-w-4xl p-6">
        <Link
          to="/"
          className="text-sm font-medium text-slate-600 hover:text-amber-500"
        >
          ← Back to Product
        </Link>

        <div className="mt-4 grid grid-cols-1 gap-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-slate-900">
              {product.name}
            </h1>
            <p className="mt-4 leading-relaxed text-slate-600">
              {product.description}
            </p>
            <p className="mt-6 text-3xl font-bold text-amber-500">
              ${product.price}
            </p>
            <button className="mt-6 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-amber-400 transition hover:bg-slate-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
