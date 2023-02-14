
export default function StoryCard({data}){
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-28 aspect-square justify-center items-center flex
                bg-gradient-to-r from-red-500 to-yellow-500
                hover:from-blue-500 hover:to-green-500">
                
                <img
                src={data.url}
                className="rounded-full aspect-square border-2 border-white"
                style={{width: "104px"}} />
            </div>
            <p className="text-md font-semibold">{data.username}</p>
        </div>
    )
}