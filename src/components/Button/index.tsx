import * as s from './styles';

export type ButtonProps = {
  children: React.ReactChild;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
};

const Button = ({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  fullWidth = false
}: ButtonProps) => (
  <s.ButtonWrapper
    variant={variant}
    onClick={onClick}
    type={type}
    fullWidth={fullWidth}
  >
    {children}
  </s.ButtonWrapper>
);

export default Button;
