import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

// Common props shared across all component variants
type CommonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'link';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  loading?: boolean;
  wide?: boolean;
  className?: string;
  children: ReactNode;
};

// --- Discriminated Union for Polymorphic 'as' Prop ---

// 1. Props for a standard <button>
type AsButton = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | 'as'> & {
  as?: 'button';
  href?: never; // Ensure href is not passed to a button
};

// 2. Props for a standard <a> anchor tag
type AsAnchor = CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'as'> & {
  as: 'a';
};

// 3. Props for a Next.js <Link> component
type AsNextLink = CommonProps & Omit<NextLinkProps, keyof CommonProps | 'as'> & {
  as: 'Link';
};

// The final Props type is a union of all possible variants
export type Props = AsButton | AsAnchor | AsNextLink;


const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(({
  className,
  variant = 'primary',
  size = 'md',
  wide = false,
  loading = false,
  children,
  ...props
}, ref) => {
  // Base classes
  const classNames = [
    'btn',
    variant && `btn-${variant}`,
    size && `btn-${size}`,
    wide && 'btn-wide',
    loading && 'loading',
    className,
  ].filter(Boolean).join(' ');

  // Render a Next.js Link
  if (props.as === 'Link') {
    return (
      <NextLink {...props} className={classNames} ref={ref as React.Ref<HTMLAnchorElement>}>
        {children}
      </NextLink>
    );
  }

  // Render a standard anchor
  if (props.as === 'a') {
    return (
      <a {...props} className={classNames} ref={ref as React.Ref<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }

  // Render a button by default
  const { disabled, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      disabled={disabled || loading}
      className={classNames}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {loading ? '' : children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
