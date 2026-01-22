export default function HowItWorks() {
  const steps = [
    { step: "1", title: "Sign Up", desc: "Create your free account" },
    { step: "2", title: "Add Pokémon", desc: "Enter your team info" },
    { step: "3", title: "Get Insights", desc: "Analyze and optimize your teams" },
  ];

  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold">How it Works</h2>
      <div className="mt-12 flex justify-center gap-16">
        {steps.map((s) => (
          <div key={s.step} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
              {s.step}
            </div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
