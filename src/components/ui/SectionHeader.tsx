interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center" : ""}`}>
      <span className={`text-xs font-semibold tracking-widest uppercase ${light ? "text-[#F5C842]" : "text-[#4A90D9]"}`}>
        {label}
      </span>
      <h2 className={`font-display text-4xl font-bold mt-2 mb-3 leading-tight ${light ? "text-white" : "text-[#1A1A2E]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-xl ${isCenter ? "mx-auto" : ""} ${light ? "text-white/70" : "text-[#7A7A8A]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}