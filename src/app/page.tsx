import ProductCard from "@/components/product-card";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  )
}
