function Footer({ name }) {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
      © {new Date().getFullYear()} {name}. Built with React &amp; Tailwind CSS.
    </footer>
  );
}

export default Footer;
