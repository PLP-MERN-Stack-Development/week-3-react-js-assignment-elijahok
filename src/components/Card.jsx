export default function Card({ title, children }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4 transition">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {children}
      </div>
    );
  }
  