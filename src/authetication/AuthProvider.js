import { useContext, createContext, useState } from "react";
import AuthContainer from "./AuthContainer";
import SignUpContainer from "./SignUp/SignUpContainer";
import Navigation from "../navigation/Navigation";
import MainContainer from "../main/MainContainer";
import { useSnackbar } from "notistack";

const AuthContext = createContext();

const AuthProvider = () => {
    const url = process.env.REACT_APP_URL;
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("user") || "");
    const [page, setPage] = useState(token ? 'main' : 'signin');
    const handleChangePage = (pg) => {
        if (token !== '') {
            if (pg === 'signup')
                setPage(pg);
            else
                setPage('signin');
        } else {
            setPage(pg);
        }
    };
    const loginAction = async (data) => {
        const x = await fetch(`${url}login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain",
            },
            body: JSON.stringify(data),
        }).then((res) => res.text());
        if (Number(x) === 200) {
            setUser(data.user);
            setToken('token');
            localStorage.setItem("user", data.password);
            setPage('main');
        } else {
            enqueueSnackbar('Incorrect User or Password', { variant: 'error' });
        }
        return;
    };
    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        setPage('signin');
    };
    const signUp = async (data) => {
        const x = await fetch(`${url}Signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => res.text());
        if (Number(x) === 200) {
            enqueueSnackbar('success', { variant: 'success' });
            loginAction(data);
        } else {
            enqueueSnackbar('User Already Exists', { variant: 'error' });
        }
    };
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut, handleChangePage, signUp }}>
            {page === 'signin' && <AuthContainer />}
            {page === 'signup' && <SignUpContainer />}
            {page === 'main' && (
                <Navigation >
                    <MainContainer />
                </Navigation>
            )}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
