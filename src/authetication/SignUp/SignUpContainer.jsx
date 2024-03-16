import React from 'react';
import SignUpTemplate from './SignUpTemplate';
import { useAuth } from '../AuthProvider';

const SignUpContainer = () => {
    const { handleChangePage, signUp } = useAuth();
    const onSubmit = (e) => {
        e.preventDefault();
        signUp({
            user: e.target.user.value,
            password: e.target.password.value,
        });
    };
    return (
        <SignUpTemplate
            onSubmit={onSubmit}
            handleChangePage={handleChangePage}
        />
    );
};

export default SignUpContainer;
