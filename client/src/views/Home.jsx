import Header from "../components/Header";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";

let data = [
    {
        username: "dummy1",
        profileUrl: "https://picsum.photos/200?random=1",
        postUrl: "https://picsum.photos/500/700?random=1"
    },
    {
        username: "dummy2",
        profileUrl: "https://picsum.photos/200?random=2",
        postUrl: "https://picsum.photos/500/700?random=2"
    },
    {
        username: "dummy3",
        profileUrl: "https://picsum.photos/200?random=3",
        postUrl: "https://picsum.photos/500/700?random=3"
    },
    {
        username: "dummy4",
        profileUrl: "https://picsum.photos/200?random=4",
        postUrl: "https://picsum.photos/500/700?random=4"
    },
    {
        username: "dummy5",
        profileUrl: "https://picsum.photos/200?random=5",
        postUrl: "https://picsum.photos/500/700?random=5"
    },
    {
        username: "dummy6",
        profileUrl: "https://picsum.photos/200?random=6",
        postUrl: "https://picsum.photos/500/700?random=6"
    },
    {
        username: "dummy7",
        profileUrl: "https://picsum.photos/200?random=7",
        postUrl: "https://picsum.photos/500/700?random=7"
    },
    {
        username: "dummy8",
        profileUrl: "https://picsum.photos/200?random=8",
        postUrl: "https://picsum.photos/500/700?random=8"
    },
    {
        username: "dummy9",
        profileUrl: "https://picsum.photos/200?random=9",
        postUrl: "https://picsum.photos/500/700?random=9"
    },
]

export default function Home(){
    return (
        <div className="w-full">
            <div className="w-full">
                <Header/>
            </div>
            <div className="flex flex-col h-auto my-10">
                <div className="flex"></div>
                <div className="flex flex-row h-auto overflow-auto gap-5">
                    <StoryCard/>
                    <StoryCard/>
                    <StoryCard/>
                    <StoryCard/>
                    <StoryCard/>
                    <StoryCard/>
                    <StoryCard/>
                    <StoryCard/>
                </div>
            </div>
            <div  className="flex flex-col h-auto my-10">
                <div></div>
                <div className="flex flex-row flex-wrap">
                    <PostCard data={data[0]}/>
                    <PostCard data={data[1]}/>
                    <PostCard data={data[2]}/>
                    <PostCard data={data[3]}/>
                    <PostCard data={data[4]}/>
                    <PostCard data={data[5]}/>
                    <PostCard data={data[6]}/>
                    <PostCard data={data[7]}/>
                    <PostCard data={data[8]}/>
                </div>
            </div>
            <div></div>
        </div>
    )
}