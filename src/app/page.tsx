import Portfolio from "@/components/Portfolio";
import Intro from "@/components/Intro";

export default function Home() {
    return (
        <>
            <div>
                <Intro/>
                <div id="portfolio">
                    <Portfolio/>
                </div>
            </div>
        </>
    );
}
