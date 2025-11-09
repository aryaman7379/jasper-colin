# 🛡️ Secure Product Records  
_A Next.js (App Router) project using AES-256-GCM encryption with server-side decryption_

---

## 🚀 Overview

This project demonstrates how to **securely fetch, encrypt, and decrypt data in Next.js (App Router)** using **AES-256-GCM** encryption.  
The app displays a list of encrypted **Product Cards** (fetched via an internal API route), **decrypts them on the server**, and renders them in a **responsive, animated UI** built with **Tailwind CSS** and **Framer Motion**.

---

## 🧩 Features

- 🔐 **AES-256-GCM Encryption & Decryption**
  - Encryption happens in the API route.
  - Decryption happens **only on the server** (never exposed to the client).
  - Prevents sensitive data from being leaked over the network.

- ⚡ **Server-Side Rendering (SSR)**
  - Data is decrypted and rendered server-side in `app/page.tsx`.

- 🎨 **Modern UI**
  - Built with **Tailwind CSS** and **Framer Motion**.
  - Responsive card layout for products.
  - Client-side search filtering and smooth hover animations.

---

 ## Run the project
  npm run dev 

  ## Encrypted Key

  - In .local.env kindly paste 
  ENCRYPTION_KEY="MIjddwqnMj5C22PTeaoqB4qQ5Ipi/05VnJ0V2ltC2Qs=";


