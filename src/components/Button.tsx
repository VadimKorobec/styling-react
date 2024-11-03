import { styled } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;

const Button = ({ children, className, type }: ButtonProps) => {
  return (
    <StyledButton type={type} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
