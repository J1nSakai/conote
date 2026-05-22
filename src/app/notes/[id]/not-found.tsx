import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NoteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 max-w-md mx-auto my-24 select-none">
      <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-[#EF4444]/10 text-[#EF4444] mb-4 border border-[#EF4444]/20">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Note not found</h3>
      <p className="text-sm text-[#CBC3D7] mb-6 leading-relaxed">
        The workspace note you are looking for does not exist or has been deleted.
      </p>
      <Link href="/notes">
        <Button className="bg-[#0D9488] hover:bg-[#0D9488]/85 text-white font-medium rounded-sm border-none shadow-none cursor-pointer px-5">
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
