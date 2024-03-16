import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("user") || "");
    const navigate = useNavigate();
    const loginAction = (data) => {
        setUser(data.user);
        setToken(data.password);
        localStorage.setItem("user", data.password);
        navigate("/main");
        return;
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        navigate("/signin");
    };
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            <Outlet />
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
