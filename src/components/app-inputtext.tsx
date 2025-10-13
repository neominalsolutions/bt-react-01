import React from 'react';

function InputText({ value }: { value?: string }) {
	const [message, setMessage] = React.useState('');
	const [visibleText, setVisibleText] = React.useState<boolean>(false);

	// Input text kaybetmemk için bir state açtık
	const [textValue, setTextValue] = React.useState<string>(value || '');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('input-value', event.target.value);
		setTextValue(event.target.value);

		if (event.target.value.length > 12) {
			setMessage('Text too long');
			setVisibleText(true);
		} else {
			setMessage('');
			setVisibleText(false);
		}
	};
	// Shift + Alt + F -> format code -> props componentin ,ilk değerini temsil eder. state ise componetin güncel değerini temsil eder.
	// value -> inputun içindeki değeri temsil eder.
	// textValue -> inputun içindeki değer değiştiğinde tetiklenir. ve güncel değeri temsil eder.
	// 12 karakter uzunlukta ise mesaj ve input göster
	if (visibleText) {
		return (
			<>
				<div>{message}</div>
				<input
					value={textValue}
					placeholder="pls typing"
					onChange={handleChange}
					type="text"
				/>
				;
			</>
		);
	}
	// 12 karakterden uzun değilse sadece input göster
	return (
		<input
			value={textValue}
			placeholder="pls typing"
			onChange={handleChange}
			type="text"
		/>
	);
}

export default InputText;
