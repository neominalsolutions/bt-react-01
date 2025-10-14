// Index Component ismi
// PascalCase
// Componentler büyük harfle başlar
// Componentler fonksiyonel olur
// Componentler return eder
// Componentler JSX döner
// jsx içerisinde tek bir root element olmak zorunda

import React from 'react';

// Not: index.tsx dosya ismi küçük olabilir fakat component simi index diye tanımlanamaz Index olmalı.

// Fragment : <> </> (sadece jsx de kullanılır)
export function Home() {
	// Değişkenler
	// Sabitler
	// Fonksiyonlar
	//let version = 'React 19';
	const [version, setVersion] = React.useState<string>('React 19');
	// Senaryo 2 -> Ekranda random sayı gözüksün
	const [random, setRandom] = React.useState<number>(Math.random());
	// Senaryo 1 -> Butona tıklayınca versiyon değişsin
	const handleClick = () => {
		//version = 'React 20';
		setVersion('React 20');
	};
	// Not ekranda birşey değişmiyorsa render alınmaz.
	console.log('Index component render edildi', version);
	// const değişkeni sabit değerler için kullanılır
	// let değişkeni değişken değerler için kullanılır
	// var değişkeni artık kullanılmıyor
	// ReactJS de değişken değerleri state ile yönetiriz, State hook ile setState yapıldığında component render edilir.
	// JSX
	return (
		<>
			<div>Hello, World!</div>
			<div>Versiyon : {version}</div>
			<button onClick={handleClick}>Versiyon Değiştir</button>
			<div>Random : {random}</div>
			<button onClick={() => setRandom(Math.random() * 100)}>
				Random Değiştir
			</button>
		</>
	);
}

// debug -> before mount : console.log('Index component render edildi', version); -> return -> after mount handleClick -> setRandom -> call
