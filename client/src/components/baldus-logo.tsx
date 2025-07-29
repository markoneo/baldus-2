interface BaldusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BaldusLogo({ className = "", size = "md" }: BaldusLogoProps) {
  const sizeClasses = {
    sm: {
      container: "space-x-2",
      bars: { large: "w-6 h-1", medium: "w-8 h-1" },
      columns: { heights: ["h-4", "h-3", "h-4", "h-2"], widths: "w-1" },
      text: { main: "text-sm", sub: "text-xs" }
    },
    md: {
      container: "space-x-3",
      bars: { large: "w-8 h-1", medium: "w-12 h-1" },
      columns: { heights: ["h-8", "h-6", "h-8", "h-4"], widths: "w-1" },
      text: { main: "text-xl", sub: "text-xs" }
    },
    lg: {
      container: "space-x-4",
      bars: { large: "w-10 h-1", medium: "w-14 h-1" },
      columns: { heights: ["h-10", "h-8", "h-10", "h-6"], widths: "w-1" },
      text: { main: "text-2xl", sub: "text-sm" }
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.container} ${className}`}>
      <div className="flex flex-col items-start">
        <div className="flex space-x-1 mb-1">
          <div className={`${currentSize.bars.large} bg-gold`}></div>
        </div>
        <div className="flex space-x-1 mb-2">
          <div className={`${currentSize.bars.medium} bg-gold-light`}></div>
        </div>
        <div className="flex space-x-1">
          {currentSize.columns.heights.map((height, index) => (
            <div key={index} className={`${currentSize.columns.widths} ${height} bg-gold`}></div>
          ))}
        </div>
      </div>
      <div className="text-navy">
        <div className={`${currentSize.text.main} font-bold tracking-wide`}>BALDUS</div>
        <div className={`${currentSize.text.sub} font-light tracking-widest`}>ODŠKODNINE</div>
      </div>
    </div>
  );
}
