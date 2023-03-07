import React from 'react';
import Props from './Button.props';
import './Button.style.css';

const Button: React.FC<Props> = ({ ...props }) => {
	return (
		<button {...props}>
			button
		</button>
	);
};

export default Button;
