import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Esta é a HomePage
      <a href="/produtos" className="bg-blue-500">
        Ir para produtos
      </a>
    </main>
  );
}
