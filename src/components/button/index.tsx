import "./style.css";

interface ButtonProps {
  type: string;
  label: string;
}

export function Button({ type, label }: ButtonProps) {
  return <button className={`button__${type}`}>{label}</button>;
}
