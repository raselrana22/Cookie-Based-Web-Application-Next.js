'use client'

import { setCookie } from 'nookies';

export default function Home() {

    const handleSetCookie = () => {
        console.log("set cookie");
        setCookie(null, 'user_preference', 'theme: dark', {

            maxAge: 30 * 24 * 60 * 60, // Cookie expiration in seconds (30 days)
            path: 'http://localhost:3000/api/setCookie', // Cookie available across the whole app
        });
    };

    return (
        <div>
            <button onClick={handleSetCookie}>Set Dark Theme</button>
        </div>
    );
}
