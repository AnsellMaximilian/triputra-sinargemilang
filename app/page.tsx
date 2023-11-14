import Image from "next/image";
import heroImg from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-secondary text-secondary-foreground">
      <div className="flex justify-between items-center gap-8 bg-[url('/hero-bg.png')]">
        <div className="relative bg-repeat px-4">
          <h1 className="text-primary font-bold text-6xl mb-4">
            TRIPUTRA SINARGEMILANG
          </h1>
          <p className="font-semibold text-3xl text-white mb-8">
            Building Tomorrow: Empowering Construction Excellence with Advanced
            Equipment Solutions
          </p>
          <Button className="font-bold text-xl" size="lg">
            Our Services
          </Button>
        </div>
        <Image src={heroImg} alt="hero image" height={600} />
      </div>
      {/* <div>About Us</div>
      <div>Our Clients</div>
      <div>Footer</div> */}
    </main>
  );
}
