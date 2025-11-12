import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-700 hover:-translate-y-2 overflow-hidden">
      {/* Decorative gradient background on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-green-700 to-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

      {/* Icon with animation */}
      <div className="text-green-700 mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
        <div className="p-4 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-heading font-bold mb-4 text-center text-green-800 group-hover:text-green-700 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 text-center leading-relaxed">{description}</p>

      {/* Subtle background pattern */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
        <svg viewBox="0 0 100 100" className="text-green-700">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
