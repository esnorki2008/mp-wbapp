export default function SkeletonCard() {
  return (
    <div className="p-6 bg-gray-200 rounded-xl animate-pulse shadow-sm">
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
      <div className="h-40 w-full bg-gray-300 rounded"></div>
    </div>
  );
}
