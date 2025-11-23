import React from 'react';

// This is a placeholder Icon component.
// A full implementation would typically use an SVG sprite system.
export interface Props extends React.SVGProps<SVGSVGElement> {
  id: string; // The ID of the icon from the SVG sprite.
  size?: number;
}

export default function Icon({ id, size = 24, className = '', ...otherProps }: Props) {
  return (
    <svg className={className} width={size} height={size} {...otherProps}>
      <use href={`/sprites.svg#${id}`} />
    </svg>
  );
}
