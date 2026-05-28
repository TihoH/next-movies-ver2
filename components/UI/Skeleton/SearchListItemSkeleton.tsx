
interface SearchListItemSkeletonProps {
  count: number;
}
export default function SearchListItemSkeleton({
  count,
}: SearchListItemSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex gap-4 mt-6 border border-gray-700 rounded-lg p-2 animate-pulse mx-4"
        >
          <div className="max-h-[250px] h-[220px] max-w-[150px] w-full bg-gray-800 rounded-lg" />

          <div className="py-3 flex flex-col gap-4 w-full">
            <div className="flex justify-between gap-4">
              <div className="h-6 w-[220px] bg-gray-800 rounded" />
              <div className="h-5 w-[120px] bg-gray-800 rounded" />
            </div>

            <div className="h-4 w-[100px] bg-gray-800 rounded" />

            <div className="flex flex-col gap-2 mt-3">
              <div className="h-4 w-full bg-gray-800 rounded" />
              <div className="h-4 w-[90%] bg-gray-800 rounded" />
              <div className="h-4 w-[70%] bg-gray-800 rounded" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}