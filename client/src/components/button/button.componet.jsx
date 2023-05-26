import './button.styles.scss'

export const BUTTON_TYPES_CLASSES = {
  default: 'default',
  secondary: 'secondary'
}

const Button = ({ children, buttonType, ...otherProps }) => {

  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
    )
}

export default Button
