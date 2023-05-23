import Link from "next/link"

type Props = {
    displayName: string
}

export default function Homepage({ displayName }: Props) {
    return (
        <>
            <p className="text-center text-2xl">Hello!!!</p>
            <p>{displayName}</p>
            <Link href="/users">
                Users
            </Link>
        </>

    )
}