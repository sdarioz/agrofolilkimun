import React from 'react';

export type Props = Omit<React.ComponentPropsWithoutRef<'input'>, 'class' | 'className'> & {
  label?: string;
  valueLabel?: string;
};

export default function Range({ label, valueLabel, ...props }: Props) {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={props.name} className="label">
          <span className="label-text">{label}</span>
          {valueLabel && <span className="label-text-alt">{valueLabel}</span>}
        </label>
      )}
      <input
        {...props}
        type="range"
        className="range range-primary"
      />
    </div>
  );
}
