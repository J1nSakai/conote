import { Skeleton } from "@/components/ui/skeleton";

export default function NoteEditorLoading() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 py-6">
      {/* Skeleton Editor Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-8 bg-white/5 rounded-sm" />
          <Skeleton className="h-6 w-48 bg-white/5" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-16 bg-white/5" />
          <Skeleton className="h-8 w-16 bg-white/5 rounded-sm" />
        </div>
      </div>

      {/* Skeleton Text Inputs */}
      <div className="space-y-6 pt-4">
        <Skeleton className="h-10 w-3/4 bg-white/5 rounded-sm" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full bg-white/5" />
          <Skeleton className="h-4 w-[95%] bg-white/5" />
          <Skeleton className="h-4 w-[88%] bg-white/5" />
          <Skeleton className="h-4 w-full bg-white/5" />
          <Skeleton className="h-4 w-[92%] bg-white/5" />
        </div>
      </div>
    </div>
  );
}
