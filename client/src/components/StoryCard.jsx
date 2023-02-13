
export default function StoryCard(){
    return (
        <div>
            <div className="rounded-full w-36 aspect-square justify-center items-center flex
                bg-gradient-to-r from-red-500 to-yellow-500
                hover:from-blue-500 hover:to-green-500">
                
                <img
                src="https://picsum.photos/seed/picsum/200"
                className="rounded-full aspect-square border-4 border-white"
                style={{width: "136px"}} />
            </div>
            <p>Febian23</p>
        </div>
    )
}