import React from 'react';


/**
 * Button constructor
 * @class
 */
class Button extends React.Component {
  static defaultProps = {
    className: ''
  };

  render() {
    const { children, ...reactProps } = this.props;

    return (
      <button
        { ...reactProps }
        className={'seed-button ' + this.props.className}
      >
        {children}
      </button>
    );
  }
}


/** Define module API */
export default Button;
