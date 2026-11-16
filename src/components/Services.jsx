import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

function Services({ items }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading label="Services" title="What I can do for you" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Services;
