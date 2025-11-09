
import crypto from "crypto";

const KEY_ENV = process.env.ENCRYPTION_KEY;
if (!KEY_ENV) {
    throw new Error("Missing ENCRYPTION_KEY in environment");
}
const KEY = Buffer.from(KEY_ENV, "base64"); 

export function encryptJSON(obj: any) {
    const iv = crypto.randomBytes(12); // 12 bytes recommended for GCM
    const cipher = crypto.createCipheriv("aes-256-gcm", KEY, iv);
    const plaintext = Buffer.from(JSON.stringify(obj), "utf8");
    const ciphertext = Buffer.concat([
        cipher.update(plaintext),
        cipher.final(),
    ]);
    const authTag = cipher.getAuthTag();

    // Pack: iv(12) | authTag(16) | ciphertext
    const payload = Buffer.concat([iv, authTag, ciphertext]).toString("base64");
    return payload;
}

export function decryptJSON(base64Payload: string) {
    const data = Buffer.from(base64Payload, "base64");
    const iv = data.slice(0, 12);
    const authTag = data.slice(12, 28); // 16 bytes
    const ciphertext = data.slice(28);

    const decipher = crypto.createDecipheriv("aes-256-gcm", KEY, iv);
    decipher.setAuthTag(authTag);
    const plaintext = Buffer.concat([
        decipher.update(ciphertext),
        decipher.final(),
    ]);
    return JSON.parse(plaintext.toString("utf8"));
}
