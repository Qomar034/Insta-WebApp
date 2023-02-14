import PhotoProfile from "./PhotoProfile";

export default function CommentCard({data, type, form}){
    if (!type) type = "comment"
    return (
        <div className="w-80 flex gap-1 bg-white p-1">
            <div className="mx-2">
                <PhotoProfile link={data.photoUrl} story={data.story} width={34} />
            </div>
            
            { form ? (
            <div className="flex flex-col items-center justify-center relative w-full">
                <form className="flex items-center justify-between w-full gap-2">
                    <input type="text" placeholder="Add a comment" className="w-auto p-1 border-0"/>
                    <button type="submit" className="text-md text-white bg-blue-400 border rounded p-1 absolute right-0">Post</button>
                </form>
                
                
            </div>
            ) : (
            <div>
                <div>
                    <span className="text-md font-bold">{data.username}</span>
                    <span>{"   "}</span>
                    <span className="text-md">{data.comment}</span>
                </div>
                <div className="flex gap-3">
                    <div className="text-gray-500 text-sm">{data.time}</div>
                    {type == "comment" ? <div className="text-gray-500 text-sm">Like</div> : null}
                    {type == "comment" ? <div className="text-gray-500 text-sm">Reply</div> : null}
                </div>
            </div>
            )}
        </div>
    )
}

/*
data = {
    username: "comment1",
    photoUrl: "https://picsum.photos/200?random=20",
    story: true,
    comment: "Great Job Buddy"
}
*/