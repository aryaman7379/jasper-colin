"use client";

import React from "react";
import ProductCard from "./ProductCard";
import type { Item } from "@/type/item"; 
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    items: Item[];
    filterQuery?: string;
};

const CardGrid: React.FC<Props> = ({ items } : any) => {
    

    return (
        <div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                    {items?.map((item : Item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                        >
                            <ProductCard item={item} />
                           
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {items?.length === 0 && (
                <div className="mt-6 text-center text-gray-500">
                    No products found
                </div>
            )}
        </div>
    );
};

export default CardGrid;
