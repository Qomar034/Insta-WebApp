import Header from "../components/Header";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";

let data = [
    {
        username: "dummy1",
        profileUrl: "https://picsum.photos/200?random=1",
        postUrl: "https://picsum.photos/500/700?random=1",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy2",
        profileUrl: "https://picsum.photos/200?random=2",
        postUrl: "https://picsum.photos/500/500?random=2",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy3",
        profileUrl: "https://picsum.photos/200?random=3",
        postUrl: "https://picsum.photos/300/400?random=3",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy4",
        profileUrl: "https://picsum.photos/200?random=4",
        postUrl: "https://picsum.photos/400/600?random=4",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy5",
        profileUrl: "https://picsum.photos/200?random=5",
        postUrl: "https://picsum.photos/500/500?random=5",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy6",
        profileUrl: "https://picsum.photos/200?random=6",
        postUrl: "https://picsum.photos/500/700?random=6",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy7",
        profileUrl: "https://picsum.photos/200?random=7",
        postUrl: "https://picsum.photos/500/700?random=7",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy8",
        profileUrl: "https://picsum.photos/200?random=8",
        postUrl: "https://picsum.photos/500/700?random=8",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
    {
        username: "dummy9",
        profileUrl: "https://picsum.photos/200?random=9",
        postUrl: "https://picsum.photos/500/700?random=9",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 1500,
        commentsCount: 50,


    },
]

export default function Home(){
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Header/>
            <div className="flex justify-center items-center flex-col" style={{width: "1000px"}}>
                <div className="flex flex-col w-full h-auto my-10">
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
                    <div></div>
                <div  className="flex flex-row h-auto my-10">
                    <div className="flex flex-col">
                        <PostCard data={data[0]}/>
                        <PostCard data={data[3]}/>
                        <PostCard data={data[6]}/>
                    </div>
                    <div className="flex flex-col">
                        <PostCard data={data[1]}/>
                        <PostCard data={data[4]}/>
                        <PostCard data={data[7]}/>
                    </div>
                    <div className="flex flex-col">
                        <PostCard data={data[2]}/>
                        <PostCard data={data[5]}/>
                        <PostCard data={data[8]}/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}