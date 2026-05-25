export default function HelloWorld() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{today}</p>
    </div>
  );
}
