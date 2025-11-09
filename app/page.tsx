import { decryptJSON } from "@/lib/crypto";
import { Item } from "@/type/item";
import SearchClient from "@/components/SearchClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/encryptedData`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch encrypted data");
    }

    const { data: encryptedBase64 } = await res.json();
    const items: Item[] = decryptJSON(encryptedBase64);

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
                       Product Records
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                        Browse encrypted product data securely — rendered with
                        server-side decryption.
                    </p>
                </div>

                
                <div className="bg-white/70 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-8">
                    <SearchClient items={items} />
                </div>
            </div>
        </main>
    );
}
