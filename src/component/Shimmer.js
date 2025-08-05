const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 p-4 bg-black animate-pulse">
      {/* This div wraps all shimmer cards and applies the common style */}
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
      <div className="w-60 h-48 bg-gray-700 rounded-lg"></div>
    </div>
  );
};

export default Shimmer;
