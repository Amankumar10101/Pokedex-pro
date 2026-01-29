import Link from "next/link";

export default function CTASection() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-3xl font-bold">Ready to level up?</h2>
      <p className="mt-4 text-gray-700">
        Sign up today and start building your ultimate Pokémon GO team!
      </p>
      <Link
        href="/signup"
        className="mt-6 inline-block bg-green-500 text-white px-10 py-3 rounded hover:bg-green-600"
      >
        Sign Up Free
      </Link>
    </section>
  );
}
