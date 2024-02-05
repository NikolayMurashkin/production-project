import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { Loader } from 'shared/ui/Loader/Loader';
import cn from 'classnames';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={cn('app', theme)}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
