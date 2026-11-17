function ProjectCard({ letter, title, description, stack, gradient }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-card">
      <div
        className={`flex h-40 items-center justify-center bg-gradient-to-br ${gradient} text-5xl font-extrabold text-white/90`}
      >
        {letter}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <p className="mt-3 text-xs font-semibold text-mint">{stack}</p>
        <div className="mt-4 flex gap-4 text-sm font-bold">
          <a href="#" className="text-mint hover:underline">
            Live demo →
          </a>
          <a href="#" className="hover:underline">
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
