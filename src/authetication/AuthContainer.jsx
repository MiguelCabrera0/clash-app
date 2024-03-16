import React from 'react';
import AuthTemplate from './AuthTemplate';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const AuthContainer = () => {
    const { loginAction } = useAuth();
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        loginAction({
            user: e.target.user.value,
            password: e.target.password.value
        });
        navigate('/main');
    };
    return (
        <AuthTemplate
            onSubmit={onSubmit}
        />
    );
};

export default AuthContainer;
