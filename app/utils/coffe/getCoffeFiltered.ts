import { Coffe } from "@/types"

// Function to return the coffes filtered or not
export const getCoffesList = async (query: string | undefined) => {
    const coffeList: Coffe[] = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json").then(res => res.json())
    if(!query || query === "all") return coffeList

    if(query === "available") {
        return coffeList.filter((coffe) => coffe.available)
    }
}