import React from 'react';

import LoginForm from '../components/login.form';
import { Home } from '../components/home';

export function Index() {
	// url göre hangi componentin ekranda mount olucağa karar verir
	const [route, setRoute] = React.useState({ url: '/' });

	const onRouteChange = (newUrl: string, oldUrl: string) => {
		setRoute({ url: newUrl });
		//window.location.replace('/login');
		window.history.replaceState(null, oldUrl, newUrl);
	};

	return (
		<div>
			<nav>
				<button onClick={() => onRouteChange('/login', '/')}>
					Login Form Demo
				</button>
				<button onClick={() => onRouteChange('/', '/login')}>Home</button>
			</nav>

			<main style={{ padding: 5 }}>
				{route.url === '/' && (
					<>
						<Home />
					</>
				)}

				{route.url === '/login' && (
					<>
						<LoginForm />
					</>
				)}
			</main>
		</div>
	);
}

// Senaryo tüm componentleri Index sayfasında url göre ekranda göstereceğiz.
