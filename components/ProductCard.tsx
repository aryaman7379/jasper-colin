"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Item } from "@/type/item";

type Props = {
    item: Item;
};

const ProductCard: React.FC<Props> = ({ item }) => {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>

          
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-center text-lg font-semibold mb-2 text-gray-800">
                        {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 text-center">
                        {item.description}
                    </p>
                </div>

                
                <div className="mt-4">
                    <div className="text-center text-green-600 font-bold text-lg mb-2">
                        ₹{item.price}
                    </div>
                    <div className="text-xs text-gray-400 mb-2 text-center">
                        {new Date(item.timestamp).toLocaleString()}
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                        View More
                    </button>
                </div>
            </div>
        </motion.article>
    );
};

export default ProductCard;
