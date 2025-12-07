import {
  BestDealsSection,
  CategorySection,
  HeroSection,
  NewArrivalsSection,
} from "@/components";

export default function Home() {
  return (
    <div className=" font-sans">
      <HeroSection />
      <CategorySection />
      <div className="border container mx-auto border-gray-200 my-20"></div>
      <NewArrivalsSection />
      <BestDealsSection />
    </div>
  );
}
