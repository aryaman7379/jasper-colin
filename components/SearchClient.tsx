"use client";

import { useState , useMemo } from "react";
import CardGrid from "@/components/CardGrid";
import { Item } from "@/type/item";

type Props = {
    items: Item[];
};

export default function SearchClient({ items }: Props) {
    const [query, setQuery] = useState("");

    const filteredItems = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;

        const result = items.filter(
            (it) =>
                it.title.toLowerCase().includes(q) ||
                it.description.toLowerCase().includes(q)
        );

        return result;
    }, [items, query]);


    return (
        <>
            <div className="flex flex-col items-center justify-center mb-12">
                <input
                    aria-label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search title or description..."
                    className="w-full sm:w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition text-center"
                />
            </div>

            <div className="flex justify-center">
                <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12">
                    <CardGrid items={filteredItems} />
                </div>
            </div>
        </>
    );
}
