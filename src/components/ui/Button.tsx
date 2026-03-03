import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "gold";
  onClick?: () => void;
}

export default function Button({ label, href, variant = "primary", onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary: "bg-[#4A90D9] text-white hover:bg-[#2C6FAC] hover:-translate-y-0.5 shadow-lg shadow-blue-500/30",
    secondary: "bg-transparent text-[#4A90D9] border border-[#4A90D9] hover:bg-[#E8F2FC] hover:-translate-y-0.5",
    gold: "bg-[#F5C842] text-[#1A1A2E] font-bold hover:-translate-y-0.5 shadow-lg shadow-yellow-400/40",
  };

  const classes = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={{ fontSize: "13px", padding: "10px 22px" }}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={{ fontSize: "13px", padding: "10px 22px" }}>
      {label}
    </button>
  );
}