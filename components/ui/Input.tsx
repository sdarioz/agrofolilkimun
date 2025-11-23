import React, { forwardRef } from 'react';
import Icon from './Icon';

export type Props = Omit<React.ComponentPropsWithoutRef<'input'>, 'class' | 'className'> & {
  label?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(({
  label,
  name,
  icon,
  iconPosition = 'left',
  error,
  ...props
}, ref) => {
  const hasIcon = !!icon;
  const iconSpan = hasIcon && (
    <span className={`absolute inset-y-0 ${iconPosition === 'left' ? 'left-3' : 'right-3'} flex items-center`}>
      <Icon id={icon} size={20} className="text-base-content/40" />
    </span>
  );

  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={name} className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <div className="relative">
        {iconPosition === 'left' && iconSpan}
        <input
          {...props}
          ref={ref}
          name={name}
          className={`input input-bordered w-full ${hasIcon && iconPosition === 'left' ? 'pl-10' : ''} ${hasIcon && iconPosition === 'right' ? 'pr-10' : ''} ${error ? 'input-error' : ''}`}
        />
        {iconPosition === 'right' && iconSpan}
      </div>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
