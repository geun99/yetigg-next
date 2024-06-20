import { ButtonStyle } from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: Props) => {
  return (
    <ButtonStyle>
      <button className="btn" onClick={props.onClick}>
        {children}
      </button>
    </ButtonStyle>
  );
};

export default Button;
