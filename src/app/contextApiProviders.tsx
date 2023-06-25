import React from "react";

interface ContextApiProvidersProps {
  children: React.ReactNode;
}

const ContextApiProviders: React.FC<ContextApiProvidersProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default ContextApiProviders;
