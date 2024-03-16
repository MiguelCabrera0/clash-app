import React, { useState } from "react";
import MainTemplate from "./MainTemplate";
import { useSnackbar } from "notistack";

const MainContainer = () => {
    const [data, setData] = useState();
    const { enqueueSnackbar } = useSnackbar();
    const url = process.env.REACT_APP_URL;
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!e.target.playerId.value) {
            enqueueSnackbar('Not Found', {
                variant: 'error',
            });
        } else {
            const x = await fetch(`${url}clashPlayerInfo`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: e.target.playerId.value,
                }),
            }).then((res) => res.json());
            if (x.name) {
                enqueueSnackbar('Found', {
                    variant: 'success',
                });
                if (e.target.token.value) {
                    const tokenCheck = await fetch(`${url}verifyPlayerToken`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            user: e.target.playerId.value,
                            token: e.target.token.value,
                        }),
                    }).then((res) => res.json());
                    if (tokenCheck.status === 'invalid')
                        enqueueSnackbar('Invalid Token', { variant: 'error' })
                    else
                        enqueueSnackbar('Token Validated', { variant: 'success' });
                }
                setData(x);
            }
            else {
                enqueueSnackbar('Not Found', {
                    variant: 'error',
                });
            }
        }
    }
    return (
        <MainTemplate onSubmit={onSubmit} data={data} />
    )
};

export default MainContainer;
