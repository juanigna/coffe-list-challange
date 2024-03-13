import { Coffe } from "@/types"
import Image from "next/image"

interface Props {
    coffe: Coffe
}

export const Card = ({
    coffe: {
        available,
        image,
        name,
        popular,
        price,
        rating,
        votes,
    }
}: Props) => {
    return (
        <div className="relative">
            {/* Popular tag */}
            {
                popular && (
                    <p className="py-[2px] px-2 bg-[#F6C768] absolute top-2 left-2 rounded-2xl text-black text-[10px] font-semibold">
                        Popular
                    </p>
                )
            }

            {/* Image */}
            <Image 
                src={image}
                alt={name}
                width={300}
                height={300}
                className="rounded-lg w-full bg-contain"
            />
            
            {/* Name and Price  */}
            <div className="w-full flex items-center justify-between mt-2">
                <p className="text-sm">{name}</p>

                <p className="bg-[#BEE3CC] rounded-sm font-semibold px-1 py-[3px] text-[10px] text-black">
                    {price}
                </p>
            </div>

            
            <div className="w-full flex items-center justify-between mt-2">
                {/* Rating and Votes */}
                <div className="flex justify-self-start items-center gap-2">
                    {
                        rating ? (
                            <Image 
                                src={'/Star_fill.svg'}
                                alt="star-filled"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image 
                                src={'/Star.svg'}
                                alt="star"
                                width={20}
                                height={20}
                            />
                        )
                    }
                    
                    
                    <p className="text-xs">
                        {
                            rating
                        }
                        <span className="pl-1 text-xs text-[#6F757C]">({votes} votes)</span>
                    </p>
                </div>

                {/* Sold out or not */}
                {
                    !available && (
                        <p className="font-semibold text-[#ED735D] text-[10px]">
                            Sold out
                        </p>
                    )
                }
            </div>

        </div>
    )
}

