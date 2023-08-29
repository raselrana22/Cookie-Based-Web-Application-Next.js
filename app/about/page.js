export default async function About() {

    const res = await fetch('http://localhost:3000/api/about', {
        method: 'GET',
        cache: 'no-cache',
    })

    const data = await res.json();

    return (
        <div>
            <p>Message: {data.message}</p>
            <p>Version: {data.version}</p>
        </div>
    )
}