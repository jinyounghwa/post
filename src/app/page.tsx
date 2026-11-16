import { getSortedPortfolio } from "@/lib/portfolio";
import Home from "@/components/world/Home";

export default function HomePage() {
  return <Home items={getSortedPortfolio()} />;
}
