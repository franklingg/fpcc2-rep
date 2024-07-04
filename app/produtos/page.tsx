import Image from "next/image";

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Esta é a página de produtos</p>
      <div className="flex flex-col gap-2">
        {Array.from(Array(11)).map((_, i) => (
          <a key={i} href={`/produtos/${i + 1}`} className="border-2">
            Produto {i + 1}
          </a>
        ))}
      </div>
    </main>
  );
}
