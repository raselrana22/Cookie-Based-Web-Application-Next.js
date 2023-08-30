'use client'
import { setCookie } from 'nookies';

export default function Home() {

    const handleSetCookie = () => {
        const theme = 'dark';
        setCookie(null, 'theme', theme, {
            path: '/api/setCookie',
        });
        console.log("Cookie set");
    };

    return (
        <div>
            <button onClick={handleSetCookie}>Set Dark Theme</button>
        </div>
    );
}

