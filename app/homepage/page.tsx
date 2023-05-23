import Link from "next/link"

type Props = {

}

export default function Homepage() {
    return (
        <>
            <p className="text-center text-2xl">Hello!!!</p>
            <p>{ }</p>
            <Link href="/users">
                Users
            </Link>
        </>

    )
}