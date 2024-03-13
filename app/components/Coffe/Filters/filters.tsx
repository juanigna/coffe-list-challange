"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


export const Filters = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Function to handle filters
    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex gap-2 items-center mb-5">
            <button className="text-sm font-semibold p-2 rounded-md bg-[#6F757C]" onClick={() => handleSearch('all')}>
                All Products
            </button>
            <button className="text-sm font-semibold" onClick={() => handleSearch('available')}>
                Available Now
            </button>
        </div>
    )
}
