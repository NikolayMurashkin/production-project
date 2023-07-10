import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage, MainPage } from './pages';
import { Theme } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О нас</Link>
			<button onClick={toggleTheme}>
				{theme === Theme.LIGHT ? 'Темная тема' : 'Светлая тема'}
			</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />}></Route>
					<Route path={'/'} element={<MainPage />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
};
