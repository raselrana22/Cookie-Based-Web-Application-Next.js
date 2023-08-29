export default async function Login() {
    const res = await fetch('http://localhost:3000/api/redirect', {
        method: 'GET',
        cache: 'no-cache'
    })
    return (
        <></>
    )
}