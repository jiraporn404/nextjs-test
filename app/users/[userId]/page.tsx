import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./component/UserPosts"
import type { Metadata } from "next"

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }:
    Params): Promise<Metadata> {

    const user = await getUser(userId)


    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserDatail({ params: { userId } }: Params) {
    const userData = getUser(userId)
    const userPostData = getUserPost(userId)

    //const [user, userPosts] = await Promise.all([userData, userPostData])
    //const user = await userData
    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <User promise={userData} />
                <br />
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostData} />
            </Suspense>

        </>
    )
}

type Props = {
    promise: Promise<User>
}

async function User({ promise }: Props) {
    const user = await promise
    return (<>
        <h2>{user.name}</h2>
    </>)
}
