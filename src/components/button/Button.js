import './Button.css';

function Button(props) {
  return (
    <div
      className={`btn-wrapper
      ${props.isOperator(props.children) ? 'operator' : null}`}>
      {props.children}
    </div>
  );
}

export default Button;
