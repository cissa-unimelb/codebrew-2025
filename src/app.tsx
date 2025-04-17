import LandingPanel from "./panels/landing"
import SponsorsPanel from "./panels/sponsors"
import ThemesPanel from "./panels/themes"
import TimelinePanel from "./panels/timeline"
import WorkshopsPanel from "./panels/workshop"

export default function App() {
    return (
        <div>
            <LandingPanel/>
            <WorkshopsPanel/>
            <TimelinePanel/>
            <ThemesPanel/>
            <SponsorsPanel/>
        </div>
    )
}