import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
        <button class="bg-blue-200 rounded-lg p-2 ">Add to card</button>
      </div>
    </div>
  );
}
