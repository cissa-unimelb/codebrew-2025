import CodebrewTitle from "@/assets/codebrew-title.png"

export default function LandingPanel() {
    return (
        <div className="h-screen flex flex-col sm:p-10 p-4 bg-offblack bg-contain bg-no-repeat justify-center items-end gap-10"
        style={{ backgroundImage: `url("/assets/flask.png")` }}>

            <img className="h-16 sm:h-30" src={CodebrewTitle} alt="Codebrew Title"></img>

            <div className="max-w-md text-white">
                <p className="font-code text-xl">
                    Join us from <b>24th-27th April</b> for a 72-hour hackathon where you get to <b>CODE</b>, <b>CREATE</b> and <b>COLLAB</b>.
                </p>
                <div className="mt-8 space-y-4">
                    <a className="inline-block py-2 px-6 text-2xl rounded-xl bg-[#00FF00B2] font-abduction" href="https://events.humanitix.com/cissa-codebrew" rel="external noreferrer">
                        Sign Up
                    </a>
                    <div className="text-lg font-code font-medium -space-y-1">
                        <p className="text-white">Already signed up?</p>
                        <a className="inline-block text-green underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdY7l2imYoLjWr8hGlpwZFGCtbPWlsj8_iLEqo1g58xlxsN_A/viewform" rel="external noreferrer">Register your team.</a>
                    </div>
                    </div>
            </div>
        </div>
    )
}