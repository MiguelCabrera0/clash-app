import React from 'react';
import SignUpTemplate from './SignUpTemplate';
import { useAuth } from '../AuthProvider';

const SignUpContainer = () => {
    const { handleChangePage } = useAuth();
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <SignUpTemplate
            onSubmit={onSubmit}
            handleChangePage={handleChangePage}
        />
    );
};

export default SignUpContainer;
