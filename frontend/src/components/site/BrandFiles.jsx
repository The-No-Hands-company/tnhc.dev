import { BRAND_FILES } from "@/lib/brandFiles";

const GROUND = { dark: "bg-[#030303] border-white/15", light: "bg-[#F4F4F0] border-transparent" };

export default function BrandFiles() {
  return (
    <div className="mx-auto mt-28 grid max-w-3xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:px-12" data-testid="brand-files">
      {BRAND_FILES.map((f) => (
        <a key={f.href} href={f.href} download
           className="group block border border-white/15 transition-colors hover:border-acid">
          <div className={`flex h-36 items-center justify-center border-b p-6 ${GROUND[f.ground]}`}>
            <img src={f.href} alt={f.label} className="max-h-full max-w-full" />
          </div>
          <div className="px-4 py-3 font-mono text-[12px] text-white/70 group-hover:text-acid">
            {f.label} · {f.href.split(".").pop().toUpperCase()}
          </div>
        </a>
      ))}
    </div>
  );
}
