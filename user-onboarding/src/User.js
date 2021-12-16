import React from 'react';

function User({details}) {
    if (!details) {
        return <h3>Working on fetching user&apos;s details...</h3>
    }


    return (
        <div>
            <h2>{details.first_name}</h2>
            <h2>{details.last_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}

export default User;