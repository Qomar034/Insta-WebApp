
export default function Header(){
    return (
        <div className="flex justify-between items-center w-full">
            <div className="border-4 border-black rounded-md">
                <form>
                    <input type={"text"} placeholder=" Search"/>
                </form>
            </div>
            <div className="flex gap-5">
                <div>
                    <img 
                    src={("add.png")}
                    className="w-8"
                    alt="New Post Icon" />
                </div>
                <div>
                    <img src={("heart.png")} 
                    className="w-8"
                    alt="Notification Icon"/>
                </div>
                <div>
                    <img src={("reels.png")} 
                    className="w-8"
                    alt="Reels Icon"/>
                </div>
            </div>
        </div>
    )
}