export default async function getUserPost(userId: string): Promise<Post[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if (!res.ok) throw new Error('failes to fetch data')

    return res.json()
}
