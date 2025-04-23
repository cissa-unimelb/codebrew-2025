import ThursTime from "@/assets/images/thursday-timeline.svg";
import FriTime from "@/assets/images/friday-timeline.svg";
import SatTime from "@/assets/images/sat-timeline.svg";
import SunTime from "@/assets/images/sun-timeline.svg";
import { useState } from "react";

const dayTimeline = [ThursTime, FriTime, SatTime, SunTime]

function SwitchButton({name, id, index, setIndex}: {name: string, id: number, index: number, setIndex: any}){
    let on = (id == index);
    const clickIndex = () => {
        setIndex(id);
    }

    return (
        <div className="w-full text-center border-2 text-xl sm:text-2xl"
        style={{
            borderColor: "#00FF00",
            color: on ? "#000000": "#00FF00",
            backgroundColor: on ? "#00FF00": "#000000"
        }} onClick={clickIndex}> {name} </div>
    )
}

export default function TimelinePanel() {
    const [index, setIndex] = useState(0);
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center bg-offblack font-bold font-abduction text-green">
            <h1 className="text-xl sm:text-4xl"> Timeline Panel </h1>
            <div className="flex w-screen items-center justify-center">
                <div className="w-[95%] border-2 p-2 m-2">
                    <div className="flex flex-row items-stretch gap-4 mb-[-1px]">
                        <SwitchButton name="Thurday" id={0} index={index} setIndex={setIndex}/>
                        <SwitchButton name="Fri" id={1} index={index} setIndex={setIndex}/>
                        <SwitchButton name="Sat" id={2} index={index} setIndex={setIndex}/>
                        <SwitchButton name="Sun" id={3} index={index} setIndex={setIndex}/>
                    </div>
                    <div className="flex items-center justify-center w-full border-2 p-4">
                        <img src={dayTimeline[index]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}