import React from "react";

export const Section = React.forwardRef(({ className, children }, ref) => {
  return (
    <section className={className} ref={ref} style={{ position: "relative" }}>
      {children}
    </section>
  );
});
