// Hidden anti-bot field. Visually removed and excluded from the tab order and
// autofill, so real visitors never touch it; bots that fill every input do.
export default function HoneypotField({ value, onChange }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label htmlFor="website_url">Leave this field empty</label>
      <input
        type="text"
        id="website_url"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
