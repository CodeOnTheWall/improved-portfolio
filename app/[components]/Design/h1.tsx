interface StackTitleProps {
  children: string;
  className?: string;
}

export default function StackTitle({ children, className }: StackTitleProps) {
  return (
    <h1 className={`${className} font-bold md:text-2xl text-5xl`}>
      {children}
    </h1>
  );
}
