import { useState } from "react";
import PhotoProfile from "./PhotoProfile";

export default function Navbar({user}) {
    let [show, setShow] = useState(false)

    if (show) return (
        <div className="flex flex-row w-60 h-screen bg-white border-r-2 border-solid border-slate-200 rounded-t">
            <div className="flex flex-col justify-between">
            <div>
                <div className="flex w-auto h-16 pb-5 justify-center items-center mt-10 mx-2 gap-2 border-b-2 border-solid border-slate-200 rounded-t">
                    <img src={("ig.png")} className="w-12 h-12 aspect-square" />
                    <img src={("word.png")} className="w-auto h-12 aspect-auto" />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-start items-center rounded mx-3 p-1 hover:bg-slate-200">
                    <img src={("home.png")} className="w-10 h-10 aspect-square" />
                    <div className="text-md font-semibold">Home</div>
                </div>
                <div className="flex gap-5 justify-start items-center rounded mx-3 p-1 hover:bg-slate-200">
                    <img src={("search.png")} className="w-10 h-10 aspect-square" />
                    <div className="text-md font-semibold">Search</div>
                </div>
                <div className="flex gap-5 justify-start items-center rounded mx-3 p-1 hover:bg-slate-200">
                    <img src={("reels.png")} className="w-10 h-10 aspect-square" />
                    <div className="text-md font-semibold">Reels</div>
                </div>
                <div className="flex gap-5 justify-start items-center rounded mx-3 p-1 hover:bg-slate-200">
                    <img src={("chat.png")} className="w-10 h-10 aspect-square" />
                    <div className="text-md font-semibold">Messenger</div>
                </div>
                <div className="flex gap-5 justify-start items-center rounded mx-3 p-1 hover:bg-slate-200">
                    <img src={("love.png")} className="w-10 h-10 aspect-square" />
                    <div className="text-md font-semibold">Notification</div>
                </div>
                <div className="flex gap-5 justify-start items-center rounded mx-3 p-1 hover:bg-slate-200">
                    <PhotoProfile link={user.photoUrl} story={true} width={42} />
                    <div className="text-md font-semibold">{user.username}</div>
                </div>
            </div>
            <div>
                <div className="flex gap-5 justify-start items-center my-5 mx-3 rounded p-1 hover:bg-slate-200">
                    <img src={("menu.png")} className="w-10 h-10 aspect-square" />
                    <div className="text-md font-semibold">Options</div>
                </div>
            </div>
            </div>
            <div className="w-auto px-1 flex justify-center items-center" onClick={() => setShow(false)}>
                <img src={("left.png")} alt="Hide Icon" className="w-auto h-6 aspect-auto" />
            </div>
        </div>
    )
    else return (
        <div className="flex flex-row w-auto h-screen justify-between bg-white border-r-2 border-solid border-slate-200 rounded-t">
            <div className="flex flex-col justify-between">
                <div>
                    <div className="flex w-auto h-16 pb-5 justify-center items-center mt-10 mx-2 gap-2 border-b-2 border-solid border-slate-200 rounded-t">
                        <img src={("ig.png")} className="w-12 h-12 aspect-square" />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 justify-start items-center mx-3  p-1 hover:bg-slate-200">
                        <img src={("home.png")} className="w-10 h-10 aspect-square" />
                    </div>
                    <div className="flex gap-5 justify-start items-center mx-3  p-1 hover:bg-slate-200">
                        <img src={("search.png")} className="w-10 h-10 aspect-square" />
                    </div>
                    <div className="flex gap-5 justify-start items-center mx-3  p-1 hover:bg-slate-200">
                        <img src={("reels.png")} className="w-10 h-10 aspect-square" />
                    </div>
                    <div className="flex gap-5 justify-start items-center mx-3  p-1 hover:bg-slate-200">
                        <img src={("chat.png")} className="w-10 h-10 aspect-square" />
                    </div>
                    <div className="flex gap-5 justify-start items-center mx-3  p-1 hover:bg-slate-200">
                        <img src={("love.png")} className="w-10 h-10 aspect-square" />
                    </div>
                    <div className="flex gap-5 justify-start items-center mx-3  p-1 hover:bg-slate-200">
                        <PhotoProfile link={user.photoUrl} story={true} width={42} />
                    </div>
                </div>

                <div>
                    <div className="flex gap-5 justify-start items-center my-5 mx-3 rounded p-1 hover:bg-slate-200">
                        <img src={("menu.png")} className="w-10 h-10 aspect-square" />
                    </div>
                </div>
            </div>
            <div className="w-auto px-1 flex justify-center items-center" onClick={() => setShow(true)}>
                <img src={("right.png")} alt="Show Icon" className="w-auto h-6 aspect-auto" />
            </div>
        </div>
    )
}