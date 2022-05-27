interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button({ text, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={className}
    >
      {text}

    </button>
  );
}

Button.defaultProps = {
  onClick: () => { },
  className: '',
};

export default Button;
