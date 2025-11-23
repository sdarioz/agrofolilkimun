import React from 'react';

export type Props = Omit<React.ComponentPropsWithoutRef<'select'>, 'class' | 'className'> & {
  label?: string;
  options: {
    value: string | number;
    label: string;
  }[];
  error?: string;
};

export default function Select({ label, name, options, error, ...props }: Props) {
  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={name} className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        {...props}
        name={name}
        className={`select select-bordered ${error ? 'select-error' : ''}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}
