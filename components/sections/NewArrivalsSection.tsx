import { getNewArraivals } from "@/lib/actions";
import { ProductCard } from "../ui";

export default async function NewArrivalSection() {
  const newArrivals = await getNewArraivals();
  return (
    <>
      <section className="my-16 container px-3 mx-auto">
        <div className="font-light lg:text-start text-center text-2xl px-5 mb-5">
          <span className="text-primary">New</span> <span>Arrivals</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 gap-4">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] lg:min-w-[200px] snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
