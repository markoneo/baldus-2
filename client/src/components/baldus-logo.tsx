interface BaldusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BaldusLogo({ className = "", size = "md" }: BaldusLogoProps) {
  const sizeClasses = {
    sm: {
      container: "space-x-2",
      topBar: "w-12 h-1",
      bottomBar: "w-16 h-1", 
      columns: { heights: ["h-8", "h-6", "h-7", "h-5"], widths: "w-1" },
      text: { main: "text-sm", sub: "text-xs" },
      spacing: { topMargin: "mb-1", bottomMargin: "mb-2", columnSpacing: "space-x-0.5" }
    },
    md: {
      container: "space-x-3",
      topBar: "w-16 h-1.5",
      bottomBar: "w-20 h-1.5",
      columns: { heights: ["h-12", "h-9", "h-10", "h-7"], widths: "w-1.5" },
      text: { main: "text-xl", sub: "text-xs" },
      spacing: { topMargin: "mb-1", bottomMargin: "mb-2", columnSpacing: "space-x-0.5" }
    },
    lg: {
      container: "space-x-4",
      topBar: "w-20 h-2",
      bottomBar: "w-24 h-2",
      columns: { heights: ["h-16", "h-12", "h-14", "h-10"], widths: "w-2" },
      text: { main: "text-2xl", sub: "text-sm" },
      spacing: { topMargin: "mb-1.5", bottomMargin: "mb-3", columnSpacing: "space-x-1" }
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.container} ${className}`}>
      <div className="flex flex-col items-start">
        {/* Top shorter bar */}
        <div className={currentSize.spacing.topMargin}>
          <div className={`${currentSize.topBar} bg-gold`}></div>
        </div>
        {/* Bottom longer bar */}
        <div className={currentSize.spacing.bottomMargin}>
          <div className={`${currentSize.bottomBar} bg-gold`}></div>
        </div>
        {/* Four vertical columns with decreasing heights matching the logo */}
        <div className={`flex ${currentSize.spacing.columnSpacing}`}>
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
