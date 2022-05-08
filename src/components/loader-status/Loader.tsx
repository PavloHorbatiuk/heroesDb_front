import React from 'react'
import s from './Loader.module.css'

export default function Loader() {

    return (
        < div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.animation}>
                    <div className={s.circle}></div>
                    <div className={s.circle}></div>
                    <div className={s.circle}></div>
                    <div className={s.shadow}></div>
                    <div className={s.shadow}></div>
                    <div className={s.shadow}></div>
                    <span>Loading</span>
                </div>
            </div>
        </div>
    )
}