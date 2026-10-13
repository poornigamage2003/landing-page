import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  children,
  className = "",
  ...props
}) => {
  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
