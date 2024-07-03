import Portfolio from "@/components/Portfolio";
import Intro from "@/components/Intro";
import Paragraph from "@/components/Paragraph";

export default function Home() {
    return (
        <>
            <div>
                <Intro/>
                <Paragraph/>
                <Portfolio/>
            </div>
        </>
    );
}
