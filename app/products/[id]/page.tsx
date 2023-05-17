type Params = {
    params: {
        id: number
    }
}

export default function Product({ params: { id } }: Params) {
    return (
        <div>Product: </div>
    )
}


