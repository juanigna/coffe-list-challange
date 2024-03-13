

import Image from "next/image";
import { CoffeList, Filters } from "@/app/components";


export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  

  return (
    <main className="flex min-h-screen bg-cover py-20 bg-coffeImage flex-col items-center justify-center w-full">
      {/* Main section */}
      <section className="overflow-hidden max-w-[500px] m-auto w-full lg:max-w-7xl bg-[#1B1D1F] z-10 rounded-lg px-4 md:px-16 py-20 text-center flex flex-col items-center ">
        <div className="relative">
          <h1 className=" text-3xl md:text-4xl mb-4 z-30">Our Collection</h1>
          <Image 
            src={'/vector.svg'}
            alt="Vector"
            width={250}
            height={250}
            className="absolute -top-10 -right-28 -z-10"

          />
        </div>
        <p className="text-sm text-[#6F757C] z-10 max-w-[300px] md:max-w-[500px] mb-4">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        {/* Filters */}
        <Filters />

        {/* Coffe List */}
        <CoffeList 
          query={searchParams?.query}
        />
      </section>
    </main>
  );
}
