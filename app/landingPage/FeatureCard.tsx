type Props = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

export default function FeatureCard({ title, desc, icon }: Props) {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}
