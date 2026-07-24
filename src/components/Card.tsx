import { data } from "../data/data";

export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#212936] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start"
        >
          {/* Icon */}
          <div
            className={`${item.bgColor} w-12 h-12 flex items-center justify-center backdrop-blur-sm rounded-2xl text-2xl shadow-sm mb-5`}
          >
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#E5E7EB] mb-3 leading-tight">
            {item.title}
          </h3>

          {/* Desc */}
          <p className="text-[#E5E7EB] text-sm leading-relaxed mb-6 max-w-2/3 font-light">
            {item.desc}
          </p>

          {/* Image */}
          <div className="w-full mt-auto pt-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
