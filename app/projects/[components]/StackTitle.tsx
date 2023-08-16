interface StackTitleProps {
  children: string;
  className?: string;
}

export default function StackTitle({ children, className }: StackTitleProps) {
  return (
    <h1 className={`${className} font-bold text-2xl md:text-5xl`}>
      {children}
    </h1>
  );
}
