import "./styles.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {props.title}
      {children}
    </button>
  );
}
