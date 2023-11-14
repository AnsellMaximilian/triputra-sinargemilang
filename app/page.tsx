import Image from "next/image";
import heroImg from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";
import adhiKarya from "@/assets/images/clients/adhi-karya.png";
import jktPropertindo from "@/assets/images/clients/jakarta-propertindo.png";
import wijayaKarya from "@/assets/images/clients/wijaya-karya.png";
import ServiceCard from "@/components/service-card";
import exBreakers from "@/assets/images/services/excavator-breakers.png";
import exBucket from "@/assets/images/services/excavator-bucket.png";
import airCompressors from "@/assets/images/services/air-compressors.png";
import landCompactors from "@/assets/images/services/land-compactors.png";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center gap-8 bg-[url('/hero-bg.png')] bg-secondary text-secondary-foreground">
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
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-4xl text-center font-bold mb-8">About Us</h2>
        <div className="text-lg">
          <p className="">
            PT. Triputra Sinar Gemilang is a part of TSG Group whichalready in
            the construction equipment rental business since year 2012 in
            Jakarta, Indonesia
          </p>
          <p className="mb-4">
            Starting with several PortableScrew Air Compressor rentals, and now
            we are completed with other heavy equipments such as Hydraulic
            Excavators, Compactors, and others, with several sizes and
            capacities, to fit our client&apos;s infrastructure development
            activities.
          </p>
          <p className="mb-4">
            Our group of business have provided a lot of support in the
            provision of construction equipment for development projects,for
            government, BUMN, or privatelyowned projects throughout Indonesia.
          </p>
          <p className="mb-4">
            In line with the program that has been announced by the Indonesian
            government and has become a priority program, in terms of promoting
            infrastructure development, certainly encourages us to continueto
            improve and equip ourselvesso that we can always adapt to the needs
            of our clients/customers.
          </p>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground bg-[url('/blue-bg.png')]">
        <div className="container px-4 mx-auto py-24">
          <h2 className="text-4xl text-center font-bold mb-8">Our Clients</h2>
          <div className="flex gap-16 justify-center">
            <Image src={jktPropertindo} alt="Jakarta Propertindo" height={64} />
            <Image src={adhiKarya} alt="Adhi Karya" height={64} />
            <Image src={wijayaKarya} alt="Wijaya Karya" height={64} />
          </div>
          <div className="text-xl mt-8 text-center">
            We have also handled multitudes of privately owned companies&apos;
            projects
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto py-24">
        <h2 className="text-4xl text-center font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <ServiceCard
              image={exBreakers}
              title="Excavator Breakers"
              description="Used for demolition of concrete construction or asphalt. Available in various sizes and capacities according to client/customer needs."
            />
          </div>
          <div className="col-span-4">
            <ServiceCard
              image={exBucket}
              title="Excavator Bucket"
              description="Used for dredging or excavation work,material removal, land clearing and leveling (cut and fill). Also available in various sizes and capacities according to client/customer needs."
            />
          </div>
          <div className="col-span-4">
            <ServiceCard
              image={airCompressors}
              title="Air Compressors"
              description="The main advantage is its simpleshape and relatively with low noiselevel. Its functionis to produce high-pressure air for the purposes of various construction areas, such as driving jack-hammers, sand-blast machine, etc. Moveable (equipped with wheels) Optional: Jack-hammers"
            />
          </div>
          <div className="col-span-4 col-start-5">
            <ServiceCard
              image={landCompactors}
              title="Land Compactors"
              description="Used for compacting and level the ground, pavement,or asphalt. Equipped with the ability to vibrate (Vibro). With low noise level."
            />
          </div>
        </div>
      </div>
      {/*<div>Our Clients</div>
      <div>Footer</div> */}
    </main>
  );
}
