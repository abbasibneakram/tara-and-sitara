type ContainerSize = "sm" | "md" | "lg" | "xl";

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
}

const containerSizes: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
};

export default function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  const maxWidth = containerSizes[size];

  return (
    <div className={`mx-auto w-full px-4 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}