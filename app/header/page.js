export default async function Header() {
    const res = await fetch('http://localhost:3000/api/auth', {
        method: 'GET',
        headers: {
            'authorization': 'ABC-123'
        }
    });

    const data = await res.json(); // Await the json() method

    return (
        <div>
            <p>Modified Header: {data.message}</p>
        </div>
    )
}
