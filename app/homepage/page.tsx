import Link from "next/link"

type Props = {
    profile: any
}

export default function Homepage({ profile }: Props) {
    return (
        <>
            <p className="text-center text-2xl">Hello!!!</p>
            <p>{profile.displayName}</p>
            <Link href="/users">
                Users
            </Link>
        </>

    )
}