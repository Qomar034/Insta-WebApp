import PhotoProfile from "./PhotoProfile";

export default function Navbar({show}){
    if (show) return (
        <div className="flex flex-col w-auto h-screen justify-between">
            <div>
            <div className="flex w-full justify-center items-center mt-10 mx-2 gap-2 border-b-2 border-solid border-slate-200 rounded-t">
                    <img src={("ig.png")} className="w-16 h-16 aspect-square"/>
                    <img src={("word.png")} className="w-full h-28 aspect-auto"/>
                </div>
            </div>
            <div>

                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("home.png")} className="w-10 h-10 aspect-square"/>
                    <div>Home</div>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("search.png")} className="w-10 h-10 aspect-square"/>
                    <div>Search</div>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("reels.png")} className="w-10 h-10 aspect-square"/>
                    <div>Reels</div>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("chat.png")} className="w-10 h-10 aspect-square"/>
                    <div>Messanger</div>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("love.png")} className="w-10 h-10 aspect-square"/>
                    <div>Notification</div>
                </div>
                <div className="flex gap-5 py-5 justify-start items-center mt-5 border-t-2 border-solid border-slate-200 rounded-t">
                    <div></div>
                    <PhotoProfile link={"https://picsum.photos/200?random=99"} story={true} width={42} />
                    <div>Marqofy</div>
                </div>
            </div>

            <div>
                <div className="flex gap-5 justify-start items-center my-5">
                    <div></div>
                    <img src={("menu.png")} className="w-10 h-10 aspect-square"/>
                    <div>Options</div>
                </div>
            </div>
        </div>
    )
    else return (
        <div className="flex flex-col w-auto h-screen justify-between">
            <div>
            <div className="flex w-full justify-center items-center mt-10 mx-2 gap-2 border-b-2 border-solid border-slate-200 rounded-t">
                    <img src={("ig.png")} className="w-16 h-16 aspect-square"/>
                </div>
            </div>
            <div>

                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("home.png")} className="w-10 h-10 aspect-square"/>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("search.png")} className="w-10 h-10 aspect-square"/>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("reels.png")} className="w-10 h-10 aspect-square"/>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("chat.png")} className="w-10 h-10 aspect-square"/>
                </div>
                <div className="flex gap-5 justify-start items-center mt-5">
                    <div></div>
                    <img src={("love.png")} className="w-10 h-10 aspect-square"/>
                </div>
                <div className="flex gap-5 py-5 justify-start items-center mt-5 border-t-2 border-solid border-slate-200 rounded-t">
                    <div></div>
                    <PhotoProfile link={"https://picsum.photos/200?random=99"} story={true} width={42} />
                </div>
            </div>

            <div>
                <div className="flex gap-5 justify-start items-center my-5">
                    <div></div>
                    <img src={("menu.png")} className="w-10 h-10 aspect-square"/>
                </div>
            </div>
        </div>
    )
}