export default function HelloWorld() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-blue-800">Hello, World!</h2>
      <p className="text-blue-600 mt-1">Today is {currentDate}</p>
    </div>
  );
}
