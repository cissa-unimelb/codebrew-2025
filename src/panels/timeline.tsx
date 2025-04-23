import ThursTime from "@/assets/images/thursday-timeline.svg";
import FriTime from "@/assets/images/friday-timeline.svg";
import SatTime from "@/assets/images/sat-timeline.svg";
import SunTime from "@/assets/images/sun-timeline.svg";

import ThursTimeMobile from "@/assets/images/thursday-timeline-mobile.svg";
import FriTimeMobile from "@/assets/images/friday-timeline-mobile.svg";
import LeftButton from "@/assets/icons/left-button.svg?react";
import RightButton from "@/assets/icons/right-button.svg?react";

import { useState } from "react";


// DESKTOP
const dayTimelineDesktop = [ThursTime, FriTime, SatTime, SunTime]

function SwitchButton({name, id, index, setIndex}: {name: string, id: number, index: number, setIndex: any}){
    let on = (id == index);
    const clickIndex = () => {
        setIndex(id);
    }

    return (
        <div className="w-full text-center border-2 text-xl sm:text-2xl"
        style={{
            borderColor: "#00FF00",
            color: on ? "#000000": "#959595",
            backgroundColor: on ? "#00FF00": "#000000"
        }} onClick={clickIndex}> {name} </div>
    )
}

function TimelinePanelDesktop() {
    const [index, setIndex] = useState(0);
    return (
        <div className="flex py-2 flex-col w-screen items-center justify-center bg-offblack font-abduction text-green">
            <h1 className="text-2xl sm:text-4xl"> Timeline Panel </h1>
            <div className="flex w-screen items-center justify-center">
                <div className="w-[95%] border-2 p-2 m-2">
                    <div className="flex flex-row items-stretch gap-4 mb-[-1px]">
                        <SwitchButton name="THURS 24TH" id={0} index={index} setIndex={setIndex}/>
                        <SwitchButton name="FRI 25TH" id={1} index={index} setIndex={setIndex}/>
                        <SwitchButton name="SAT 26TH" id={2} index={index} setIndex={setIndex}/>
                        <SwitchButton name="SUN 27TH" id={3} index={index} setIndex={setIndex}/>
                    </div>
                    <div className="flex items-center justify-center w-full border-2 p-4">
                        <img src={dayTimelineDesktop[index]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Mobile
const dayTimelineMobile = [ThursTimeMobile, FriTimeMobile, ThursTimeMobile, FriTimeMobile]
const dayTextMobile = ["THURS 24TH", "FRI 25TH", "SAT 26TH", "SUN 27TH"]

function NavButton({navFunc, buttonLeft}: {navFunc: any, buttonLeft: boolean}){
    let curClass = `flex ${buttonLeft? "justify-start" : "justify-end"} items-center col-span-1 text-green`;
    return(
        <div className={curClass}> 
            <button className="text-[#00FF00] hover:text-[#959595]" onClick={navFunc}>
                {buttonLeft? <LeftButton /> : <RightButton />} 
            </button>
        </div>
    )
}

function TimelinePanelMobile(){
    const [index, setIndex] = useState(0);
    const leftClick = () => {
        setIndex((index + dayTimelineMobile.length - 1) % dayTimelineMobile.length);
    }

    const rightClick = () => {
        setIndex((index + 1) % dayTimelineMobile.length);
    }
    return (
        <div className="flex py-2 flex-col w-screen items-center justify-center bg-offblack font-abduction">
            <div>
                <h1 className="p-2 text-2xl sm:text-4xl"> Timeline Panel </h1>
            </div>
            <div className="flex flex-col w-screen items-center justify-center">
                <div className="w-[95%] grid grid-cols-5 gap-4">
                    <NavButton navFunc={leftClick} buttonLeft={true}/>
                    <div className="flex justify-center items-center col-span-3 border-2 text-black bg-green text-2xl sm:text-4xl"> 
                        {dayTextMobile[index]} 
                    </div>
                    <NavButton navFunc={rightClick} buttonLeft={false}/>
                </div>
                <div className="w-[95%] border-2 p-2 m-2">
                    <div className="flex items-center justify-center w-full border-2 p-4">
                        <img src={dayTimelineMobile[index]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Combined
function detectMob() {
    return ( ( window.innerWidth <= 800 ));
}



export default function TimelinePanel(){
    if (detectMob()){
        return (<TimelinePanelMobile/>)
    } else {
        return (<TimelinePanelDesktop />)
    }

}   