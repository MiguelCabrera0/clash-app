import { useContext, createContext, useState } from "react";
import AuthContainer from "./AuthContainer";
import SignUpContainer from "./SignUp/SignUpContainer";
import Navigation from "../navigation/Navigation";
import MainContainer from "../main/MainContainer";

const AuthContext = createContext();

const AuthProvider = () => {
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
    const loginAction = (data) => {
        setUser(data.user);
        setToken(data.password);
        localStorage.setItem("user", data.password);
        setPage('main');
        return;
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        setPage('signin');
    };
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut, handleChangePage }}>
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
