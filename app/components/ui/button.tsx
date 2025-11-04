interface ButtonProps {
  label: string;
  onClick: () => void;
  className: string;
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        {props.label}
      </button>
    </div>
  );
}
