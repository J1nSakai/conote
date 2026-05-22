import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0E14] text-[#E5E2E1]">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 sm:px-8">
        {children}
      </main>
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
}
