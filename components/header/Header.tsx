import {Button} from "@mui/material";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useRouter} from "next/router";
import {SERVER_URL} from "../../constants/url";
import classes from './Header.module.scss'

export const Header = () => {
    const {user, isAuth} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const router = useRouter()

    return (
        <header className={classes.header}>
            <p className={classes.logo}>BANDA <span>map</span></p>

            {isAuth
                ? <div className={classes.btn_group}>
                    <div className={classes.profile}>
                        {user.avatar && <img className={classes.avatar} src={`${SERVER_URL}/${user.avatar}`}/>}
                        <span className={classes.text}>{user.firstName} {user.lastName[0]}</span>
                    </div>
                    <Button variant="text">Выйти</Button>
                </div>
                : <Button variant="text">Логин</Button>

            }
        </header>
    )
}