import NavBar from "../component/navBar";
import { getProducts } from "../data/product";
import ProductCard from "../component/productCard";

export default function HomePage() {
  const products = getProducts();
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />

      <section className="bg-slate-900 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Welcome to <span className="text-amber-400">Shopping Hub</span>
        </h1>
        <p className="mt-3 text-slate-300">
          Find everything you need in one place.
        </p>
      </section>

      <div className="px-6 pt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Our Products</h2>
        <div className="mt-2 h-1 w-16 rounded bg-amber-400" />
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
