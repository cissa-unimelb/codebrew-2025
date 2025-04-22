import LandingPanel from "./panels/landing"
import AboutPanel from "./panels/about"
import SponsorsPanel from "./panels/sponsors"
import ThemesPanel from "./panels/themes"
import TimelinePanel from "./panels/timeline"
import WorkshopsPanel from "./panels/workshop"
import FAQPanel from "./panels/faq"


export default function App() {
    return (
        <div>
            <LandingPanel/>
            <AboutPanel/>
            <ThemesPanel/>
            <SponsorsPanel/>
        </div>
    )
}