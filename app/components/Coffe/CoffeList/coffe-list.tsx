
import { Coffe } from "@/types"
import { Card, Filters } from "../.."
import { useEffect, useState } from "react";
import { getCoffesList } from "@/app/utils";


export const CoffeList = async ({query}: {query: string | undefined}) => {
    
    // Coffes filtered by query
    const coffeList = await getCoffesList(query)

    return (
        <>  
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                {coffeList?.map((coffe) => (
                    <Card
                        key={coffe.id}
                        coffe={coffe}
                    />
                ))}
            </section>
    </>
  );
};
