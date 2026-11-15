function SectionHeading({ label, title }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-widest text-mint">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </>
  );
}

export default SectionHeading;
