import { add } from "@/lib/math";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>ClassDrop Actions Lab</h1>
      <p>
        2 + 2 = <strong>{add(2, 2)}</strong>
      </p>
    </main>
  );
}
