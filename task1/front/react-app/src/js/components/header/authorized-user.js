import React from 'react'

export default function AuthorizedUser() {
    return (
        <div className="user-profile">
            <div className="user-profile__notification"> 
                <span className="ico notification__ico"></span>
            </div>
            <div className="user-profile__user user">
                <span className="user__photo"></span>
                <span className="user__name">karina masalova</span>
            </div>
            <div className="user-profile__power-off">
                <span className="ico power-off__ico"></span>
            </div>
        </div>
    )
}
