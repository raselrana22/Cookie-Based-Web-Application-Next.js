import React from 'react';

export default async function User() {
    const res = await fetch('/api/setCookie');
    const themeData = await res.json(); // Await the json() method

    return (
        <div>
            <p>User theme: {themeData.theme}</p>
        </div>
    );
}
