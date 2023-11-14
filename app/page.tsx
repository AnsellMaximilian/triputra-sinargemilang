import Image from "next/image";
import heroImg from "@/assets/images/hero.jpg";
import { Button, buttonVariants } from "@/components/ui/button";
import adhiKarya from "@/assets/images/clients/adhi-karya.png";
import jktPropertindo from "@/assets/images/clients/jakarta-propertindo.png";
import wijayaKarya from "@/assets/images/clients/wijaya-karya.png";
import ServiceCard from "@/components/service-card";
import exBreakers from "@/assets/images/services/excavator-breakers.png";
import exBucket from "@/assets/images/services/excavator-bucket.png";
import airCompressors from "@/assets/images/services/air-compressors.png";
import landCompactors from "@/assets/images/services/land-compactors.png";
import logo from "@/assets/images/logo.svg";
import { MapPin, Phone, Mail, Landmark } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center gap-8 bg-[url('/hero-bg.png')] bg-secondary text-secondary-foreground">
        <div className="relative bg-repeat px-4 py-16">
          <h1 className="text-primary font-bold text-3xl md:text-4xl lg:text-6xl mb-4">
            TRIPUTRA SINARGEMILANG
          </h1>
          <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-white mb-8">
            Building Tomorrow: Empowering Construction Excellence with Advanced
            Equipment Solutions
          </p>
          <Link
            href="#services"
            className={cn(
              buttonVariants({ size: "lg" }),
              "font-bold text-lg md:text-xl"
            )}
          >
            Our Services
          </Link>
        </div>
        <Image
          src={heroImg}
          alt="hero image"
          className="hidden md:block h-[400px] lg:h-[600px] w-auto"
        />
      </div>
      <div className="container px-4 mx-auto py-24" id="about">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
          About Us
        </h2>
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
        <div className="container px-4 mx-auto py-24" id="clients">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
            Our Clients
          </h2>
          <div className="flex gap-8 md:ap-16 justify-center">
            <Image
              src={jktPropertindo}
              alt="Jakarta Propertindo"
              className="h-[32px] md:h-[64px] w-auto"
            />
            <Image
              src={adhiKarya}
              alt="Adhi Karya"
              className="h-[32px] md:h-[64px] w-auto"
            />
            <Image
              src={wijayaKarya}
              alt="Wijaya Karya"
              className="h-[32px] md:h-[64px] w-auto"
            />
          </div>
          <div className="text-lg md:text-xl mt-8 text-center">
            We have also handled multitudes of privately owned companies&apos;
            projects
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto py-24" id="services">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <ServiceCard
              image={exBreakers}
              title="Excavator Breakers"
              description="Used for demolition of concrete construction or asphalt. Available in various sizes and capacities according to client/customer needs."
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ServiceCard
              image={exBucket}
              title="Excavator Bucket"
              description="Used for dredging or excavation work,material removal, land clearing and leveling (cut and fill). Also available in various sizes and capacities according to client/customer needs."
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ServiceCard
              image={airCompressors}
              title="Air Compressors"
              description="The main advantage is its simpleshape and relatively with low noiselevel. Its functionis to produce high-pressure air for the purposes of various construction areas, such as driving jack-hammers, sand-blast machine, etc. Moveable (equipped with wheels) Optional: Jack-hammers"
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-5">
            <ServiceCard
              image={landCompactors}
              title="Land Compactors"
              description="Used for compacting and level the ground, pavement,or asphalt. Equipped with the ability to vibrate (Vibro). With low noise level."
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral text-neutral-foreground">
        <div className="container px-4 mx-auto py-24 relative" id="contact">
          <div className="hidden md:block absolute inset-y-0 w-1/3 bg-primary right-0"></div>
          <div className="flex gap-16 md:gap-4 items-center relative flex-wrap md:flex-nowrap">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <MapPin className="text-red-800" size={32} />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div>
                      Ruko Arana Blok IX.3 No.15 Harapan Indah Bekasi Jawa Barat
                      17215
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="" size={32} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>+62 813 1010 1888 / +62 812 1111 5335</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="" size={32} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>triputrasinargemilang@gmail.com</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Landmark className="text-blue-800" size={32} />
                  <div>
                    <div className="font-semibold">Rekening</div>
                    <div>Rekg: 414 292555 BCA/ PT. Triputra Sinar Gemilang</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d126.8637920945285!2d106.99519543078827!3d-6.163337757796335!2m2!1f333.6781818181819!2f45!3m2!1i1024!2i768!4f35!5e1!3m2!1sen!2sid!4v1699943605398!5m2!1sen!2sid"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none"
            ></iframe> */}
            <iframe
              className="relative border-none w-[400px] h-[500px] grow"
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d247.9227903897786!2d106.99475047739729!3d-6.162266610900373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-6.1623256!2d106.9948343!5e0!3m2!1sen!2sid!4v1699943882032!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="container px-4 mx-auto py-12">
          <Image src={logo} alt="logo" className="w-24" />
        </div>
      </footer>
    </main>
  );
}
