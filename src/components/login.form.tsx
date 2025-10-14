import React from 'react';

function LoginForm() {
	const [usernameText, setUsernameText] = React.useState('');
	const [passwordText, setPasswordText] = React.useState('');

	const onUserNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setUsernameText(value);
	};

	const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPasswordText(value);
	};

	const onSubmit = () => {
		const formValues = { username: usernameText, password: passwordText }; // object literal
		console.log('form-data', formValues);
        // api post olacak veri
	};

	return (
		<>
			<p>
				Username: {usernameText}, password: {passwordText}
			</p>
			<input type="text" value={usernameText} onInput={onUserNameHandler} />
			<input type="password" value={passwordText} onInput={onPasswordHandler} />
			<button onClick={onSubmit}>Submit</button>
		</>
	);
}

export default LoginForm;
