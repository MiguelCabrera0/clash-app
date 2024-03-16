import React from 'react';
import AuthTemplate from './AuthTemplate';
import { useAuth } from './AuthProvider';

const AuthContainer = () => {
    const { loginAction, handleChangePage } = useAuth();
    const onSubmit = (e) => {
        e.preventDefault();
        loginAction({
            user: e.target.user.value,
            password: e.target.password.value
        });
    };
    return (
        <AuthTemplate
            onSubmit={onSubmit}
            handleChangePage={handleChangePage}
        />
    );
};

export default AuthContainer;
