import { NextResponse } from "next/server";
import { encryptJSON } from "@/lib/crypto";

export async function GET() {
    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            description:
                "Experience superior sound quality and comfort with these noise-cancelling wireless headphones.",
            price: 2499,
            image: "https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw116fde54/images/categories/headphones/major-iv/both/usp05-major-iv.jpg",
            timestamp: new Date().toISOString(),
        },
        {
            id: 2,
            title: "Smartwatch Pro X",
            description:
                "Track your health, fitness, and notifications seamlessly with the latest Smartwatch Pro X.",
            price: 4999,
            image: "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2022/09/LI-Apple-Watch-Ultra-display.png",
            timestamp: new Date().toISOString(),
        },
        {
            id: 3,
            title: "4K Action Camera",
            description:
                "Capture your adventures in stunning 4K resolution with waterproof housing and stabilization.",
            price: 8999,
            image: "https://cdn.shopify.com/s/files/1/0024/9803/5810/collections/1_jpeg_edit.jpg?v=1573102921",
            timestamp: new Date().toISOString(),
        },
    ];

    const encrypted = encryptJSON(products);

    return NextResponse.json({ data: encrypted });
}
