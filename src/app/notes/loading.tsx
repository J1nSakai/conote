import { Skeleton } from "@/components/ui/skeleton";

export default function NotesLoading() {
  return (
    <div className="space-y-8 select-none">
      {/* Skeleton header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/5">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48 bg-white/5" />
          <Skeleton className="h-4 w-72 bg-white/5" />
        </div>
        <Skeleton className="h-9 w-28 bg-white/5 rounded-sm" />
      </div>

      {/* Skeleton grid list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 bg-[#121212] rounded-md border border-white/5 h-[170px]"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-sm bg-white/5" />
                <Skeleton className="h-5 w-32 bg-white/5" />
              </div>
              <Skeleton className="h-4 w-full bg-white/5" />
              <Skeleton className="h-4 w-[85%] bg-white/5" />
            </div>
            <div className="pt-3 border-t border-white/5 flex justify-between items-center">
              <Skeleton className="h-3.5 w-24 bg-white/5" />
              <Skeleton className="h-6 w-6 rounded-sm bg-white/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
