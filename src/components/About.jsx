import SectionHeading from "./SectionHeading";

function About({ skills }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        label="About me"
        title="Turning ideas into clean interfaces"
      />
      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-white/80 md:col-span-3">
          <p>
            I’m a frontend developer who cares about the details: clean code,
            pixel-accurate layouts and interfaces that feel good to use.
          </p>
          <p>
            Write your story here: how you started coding, what you’re learning
            now, and what kind of team or project you’re looking for.
          </p>
        </div>
        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/60">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-2 text-sm font-semibold">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-mint/40 px-4 py-1.5 text-mint"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
