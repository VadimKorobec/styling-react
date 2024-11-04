import { styled } from "styled-components";

interface StyledProps {
  $invalid?: boolean;
}

const Label = styled.label<StyledProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.$invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input<StyledProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({$invalid}) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${(props) => (props.$invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${(props) => (props.$invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

interface CustopInputProps {
  label?: string;
  type: "email" | "password";
  invalid: boolean;
  onChange: (type: string, event: string) => void;
}

const CustomInput = ({ label, invalid, type, onChange }: CustopInputProps) => {
    
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input
        type={type}
        $invalid={invalid}
        onChange={(e) => onChange(type, e.target.value)}
      />
    </p>
  );
};

export default CustomInput;
