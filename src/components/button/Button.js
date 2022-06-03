/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Button.css';

function Button(props) {
  return (
    <div
      className={`btn-wrapper
      ${props.isOperator(props.children) ? 'operator' : null}`}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;
