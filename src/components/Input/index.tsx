import "./styles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder: string;
  className?: string;
}

export default function Input(props: InputProps) {
  return (
    <>
      <label className="sr-only" htmlFor={props.id}>
        {props.placeholder}
      </label>

      <input
        aria-label={props.placeholder}
        type={props.type}
        name={`newsletter-${props.id}`}
        className={`form-control | ${props.className}`}
        id={`newsletter-${props.id}`}
        placeholder={props.placeholder}
      />
    </>
  );
}
