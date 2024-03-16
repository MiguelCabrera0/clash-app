import React from 'react';
import SignUpTemplate from './SignUpTemplate';

const SignUpContainer = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <SignUpTemplate
            onSubmit={onSubmit}
        />
    );
};

export default SignUpContainer;
