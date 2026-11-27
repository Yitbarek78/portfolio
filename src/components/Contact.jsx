import { useState } from "react";
import SectionHeading from "./SectionHeading";
import FormField from "./FormField";

const emptyForm = { name: "", email: "", message: "" };

function Contact({ email, links }) {
  const [form, setForm] = useState(emptyForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // One handleChange serves all three fields. It uses each input's name attribute to know which key to update.
  // emptyForm is defined outside the component. It serves as both the initial state and the reset value.
  // The backtick strings are template literals. ${...} inserts a JavaScript value.
  // encodeURIComponent makes text safe inside a URL. Without it, spaces and & would break the mailto: link.
  // target="_blank" opens a new tab. rel="noreferrer" blocks the new page from accessing yours. Always pair them.
  // A boolean attribute like multiline with no value means multiline={true}.

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setForm(emptyForm);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading label="Contact me" title="Let’s work together" />
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-white/80">
          <p>
            Have a project in mind or a job opportunity? Send me a message and
            I’ll reply soon.
          </p>
          <p>
            <a
              href={`mailto:${email}`}
              className="font-bold text-mint hover:underline"
            >
              {email}
            </a>
          </p>
          <ul className="flex gap-5 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mint"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <FormField
            label="Message"
            name="message"
            multiline
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="rounded-full bg-mint px-10 py-3 text-sm font-bold text-bg transition hover:brightness-110"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
