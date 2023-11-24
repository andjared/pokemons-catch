export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
}

export const Button = ({
  className,
  children,
  isLoading,
  ...rest
}: IButton) => {
  return (
    <button type="button" className={className} {...rest} disabled={isLoading}>
      {children}
    </button>
  );
};
