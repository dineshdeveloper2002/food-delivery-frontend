import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Routesdata } from './routes';
import { AppLayout } from '@container/container/home/AppLayout';

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Routesdata.map(ele => (
                    <Route
                        key={ele.path}
                        path={ele.path}
                        element={
                            ele.layout === 'none' ? (
                                <ele.element />
                            ) : (
                                <AppLayout>
                                    <ele.element />
                                </AppLayout>
                            )
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
}