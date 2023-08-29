export default async function Cookie() {
    const res = await fetch('http://localhost:3000/api/setCookie', {
        method: 'GET',
        credentials: 'include', // Send cookies with the request
    });

    const data = await res.json(); // Await the json() method

    return (
        <div>
            <p>User language: {data.message}</p>
        </div>
    )
} 