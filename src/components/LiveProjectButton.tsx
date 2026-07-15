import { ArrowUpRight } from 'lucide-react';

export function LiveProjectButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
      aria-label="Open live project"
    >
      <span>Live Project</span>
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
