import { createRoot } from 'react-dom/client';
import './index.css';

// alias name
// import LoginForm from './components/login.form';
import { Index } from './pages';

// Alt + Shift + O to remove unused imports
createRoot(document.getElementById('root')!).render(
	<div style={{ padding: 10 }}>
		{/* <MainIndex />
		<SecondaryIndex />
		<AppButton onButtonClick={() => alert('Tıklandı')} label="Button1" />
		<AppButton
			_color="red"
			onButtonClick={() => alert('Tıklandı')}
			label="Button2"
		/>
		<hr></hr>

		<InputText value="Ali" /> */}

		{/* <LoginForm /> */}
		<Index />
	</div>
);
