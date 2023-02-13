import Header from "../components/Header";
import StoryCard from "../components/StoryCard";

export default function Home(){
    return (
        <div className="w-full">
            <div className="w-full">
                <Header/>
            </div>
            <div className="flex h-auto my-10">
                <div>
                    <p></p>
                </div>
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
            <div></div>
        </div>
    )
}