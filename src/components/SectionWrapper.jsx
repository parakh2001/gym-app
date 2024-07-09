import React from 'react';
export const SectionWrapper = (props) => {
    const {children,header,title} = props;
  return (
    <div>
        {children}
        <h1>{header}</h1>
        <h1>{title}</h1>
    </div>
  );
}
