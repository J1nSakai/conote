import { LucideIcon, BookOpen } from "lucide-react";

import NewNoteDialog from "./NewNoteDialog";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
}

export function EmptyState({
  icon: Icon = BookOpen,
  title,
  description,
  actionLabel,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 rounded-md bg-[#121212] ghost-border max-w-md mx-auto my-12">
      <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-[#8B5CF6]/10 text-[#8B5CF6] mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-[#E5E2E1] mb-2">{title}</h3>
      <p className="text-sm text-[#CBC3D7] max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      <NewNoteDialog buttonText={actionLabel} />
    </div>
  );
}
