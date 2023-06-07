import React from "react";

function UserAvatar({name}) {
    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map((name) => name.charAt(0).toUpperCase());
        return initials.join(' ');
    };

    return (
        <div className="user-avatar">
            <span className="name">{getInitials(name)}</span>
        </div>
    )
}

export default UserAvatar;