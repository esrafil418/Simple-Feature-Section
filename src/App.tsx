import backgroundImage from "./assets/images/Background_image.svg";
import Card from "./components/Card";

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundColor: "#121826",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-2xl md:text-5xl font-bold text-[#E5E7EB] mb-4 max-w-lg leading-snug">
            Quality feedbacks for your SaaS products
          </h1>
          <span className="text-sm md:text-md lg:text-lg font-bold text-[#9DA3AE]">
            The blocks & components you need
          </span>
        </div>

        <Card />
      </div>
    </div>
  );
}
