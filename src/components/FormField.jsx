const inputClass =
  "w-full rounded-lg border border-white/10 bg-card px-4 py-3 text-sm focus:border-mint focus:outline-none";

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  multiline = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows="4"
          required
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      )}
    </div>
  );
}

export default FormField;

// htmlFor replaces HTML's for, because for is a reserved word in JavaScript.
// label + htmlFor + id link the label to its input. Clicking the label focuses the field, and screen readers announce it.
// inputClass is a plain string constant outside the component. It is created once, not on every render.
// The ternary multiline ? <textarea /> : <input /> picks the element.
