
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/newsletter/Newsletter";
import Work from "@/components/Work/Work";
import { useLocale } from "next-intl";

export default function Home() {
  const currentLocale = useLocale();

  return (
    <div className="min-h-[200vh]">
      <Hero />
      <Work />
      <Newsletter />
    </div>
  );
}
