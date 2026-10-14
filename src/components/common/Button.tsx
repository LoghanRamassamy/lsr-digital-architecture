import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tab';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  active?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  active = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  disabled,
  type = 'button',
  onClick,
  ...rest
}) => {
  const baseClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    active ? 'is-active btn--active' : '',
    disabled ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn__icon btn__icon--left">{icon}</span>}
      {children && <span className="btn__content">{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        className={baseClasses}
        onClick={
          disabled
            ? (e) => e.preventDefault()
            : (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)
        }
        aria-disabled={disabled}
        role="button"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={baseClasses} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};
