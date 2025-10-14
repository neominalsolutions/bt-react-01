import React from 'react';

import LoginForm from '../components/login.form';
import { Home } from '../components/home';
import Demo from '../components/demo';

export function Index() {
	// uygulamadaki bütün routelar -> dışarıdan props olarak acalacağımız model
	const routes = [
		{
			url: '/',
			component: Home,
		},
		{
			url: '/login',
			component: LoginForm,
		},
		{
			url: '/demo',
			component: Demo,
		},
		{
			url: '/demo1',
			component: Demo,
		},
	];

	const numbers = [1, 2, 3, 4];
	console.log('numbers', numbers);
	// C# daki select js de mappe karşılık
	const mappedNumbers = numbers.map((value) => value * 2);
	console.log('mappedNumbers', mappedNumbers);

	// url göre hangi componentin ekranda mount olucağa karar verir
	const [route, setRoute] = React.useState({ url: '/', component: Home });

	const onRouteChange = (newUrl: string) => {
		// route change olduğunda route dizinden ilgili route bul ve route component state güncelle
		console.log('routes', routes);
		const data = routes.find((x) => x.url === newUrl);
		console.log('data', data);

		if (data) {
			setRoute({ url: newUrl, component: data.component });
			//window.location.replace('/login');
			window.history.replaceState(null, route.url, newUrl);
		}
	};

	return (
		<div>
			<nav>
				{routes.map((item) => (
					<button onClick={() => onRouteChange(item.url)}>
						{item.component.name}
					</button>
				))}
				{/* <button onClick={() => onRouteChange('/login')}>Login Form Demo</button>
				<button onClick={() => onRouteChange('/')}>Home</button>
				<button onClick={() => onRouteChange('/demo')}>Demo</button>
				<button onClick={() => onRouteChange('/demo1')}>Demo1</button> */}
			</nav>

			<main style={{ padding: 5 }}>
				<route.component />
				{/* {route.url === '/' && (
					<>
						<Home />
					</>
				)}

				{route.url === '/login' && (
					<>
						<LoginForm />
					</>
				)}

				{route.url === '/demo' && (
					<>
						<Demo />
					</>
				)} */}
			</main>
		</div>
	);
}

// Senaryo tüm componentleri Index sayfasında url göre ekranda göstereceğiz.
