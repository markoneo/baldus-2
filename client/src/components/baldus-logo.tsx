interface BaldusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BaldusLogo({ className = "", size = "md" }: BaldusLogoProps) {
  const sizeClasses = {
    sm: {
      container: "space-x-2",
      svgSize: "w-8 h-8",
      text: { main: "text-sm", sub: "text-xs" }
    },
    md: {
      container: "space-x-3",
      svgSize: "w-12 h-12",
      text: { main: "text-xl", sub: "text-xs" }
    },
    lg: {
      container: "space-x-4",
      svgSize: "w-16 h-16",
      text: { main: "text-2xl", sub: "text-sm" }
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.container} ${className}`}>
      <svg 
        className={currentSize.svgSize} 
        viewBox="0 0 100 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top shorter horizontal bar */}
        <rect x="0" y="0" width="60" height="8" fill="currentColor" className="text-gold" />
        
        {/* Bottom longer horizontal bar */}
        <rect x="0" y="15" width="80" height="8" fill="currentColor" className="text-gold" />
        
        {/* Four angled vertical elements - recreating the slanted pattern */}
        {/* First column - tallest */}
        <polygon 
          points="0,30 8,30 20,120 12,120" 
          fill="currentColor" 
          className="text-gold" 
        />
        
        {/* Second column - medium */}
        <polygon 
          points="15,30 23,30 32,100 24,100" 
          fill="currentColor" 
          className="text-gold" 
        />
        
        {/* Third column - medium-short */}
        <polygon 
          points="30,30 38,30 44,110 36,110" 
          fill="currentColor" 
          className="text-gold" 
        />
        
        {/* Fourth column - shortest */}
        <polygon 
          points="45,30 53,30 56,90 48,90" 
          fill="currentColor" 
          className="text-gold" 
        />
      </svg>
      
      <div className="text-navy">
        <div className={`${currentSize.text.main} font-bold tracking-wide`}>BALDUS</div>
        <div className={`${currentSize.text.sub} font-light tracking-widest`}>ODŠKODNINE</div>
      </div>
    </div>
  );
}
