function ServiceCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl bg-card p-6 transition hover:-translate-y-1 hover:ring-1 hover:ring-mint/60">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </article>
  );
}

export default ServiceCard;
