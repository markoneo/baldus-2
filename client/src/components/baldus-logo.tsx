interface BaldusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BaldusLogo({ className = "", size = "md" }: BaldusLogoProps) {
  const sizeClasses = {
    sm: {
      logoSize: "h-16 w-auto",
    },
    md: {
      logoSize: "h-24 w-auto",
    },
    lg: {
      logoSize: "h-32 w-auto",
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://baldus.sirv.com/Baldus%20ods%CC%8Ckodnine%20logo%20(2).png"
        alt="BALDUS Odškodnine" 
        className="h-32 w-auto pt-[0px] pb-[0px] pl-[0px] pr-[0px] ml-[1px] mr-[1px] mt-[-30px] mb-[-30px]"
      />
    </div>
  );
}
