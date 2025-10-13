import { createRoot } from 'react-dom/client';
import './index.css';

// alias name
import { Index as MainIndex } from './components';
import { Index as SecondaryIndex } from './pages';
import AppButton from './components/app-button';
import InputText from './components/app-inputtext';

// Alt + Shift + O to remove unused imports
createRoot(document.getElementById('root')!).render(
	<div style={{ padding: 10 }}>
		<MainIndex />
		<SecondaryIndex />
		<AppButton onButtonClick={() => alert('Tıklandı')} label="Button1" />
		<AppButton
			_color="red"
			onButtonClick={() => alert('Tıklandı')}
			label="Button2"
		/>
		<hr></hr>

		<InputText value="" />
	</div>
);
