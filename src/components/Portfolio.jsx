import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function Portfolio({ items }) {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading label="Portfolio" title="Selected projects" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
