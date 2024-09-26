interface CloseButtonProps {
  className?: string;
  description?: string;
  tag?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ className, tag, description, type, onClick }: CloseButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {tag}
      {description}
    </button>
  );
};

export default Button;
