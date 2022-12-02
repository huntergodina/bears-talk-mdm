import { autoAdvancePick } from "./draftLogic"

const newTimerTimeout = (pickTime: number) => {
    return setTimeout(autoAdvancePick, pickTime);
}

const nextTimer = (pickTime: number, timer: NodeJS.Timeout) => {
    clearTimeout(timer);
    return setTimeout(autoAdvancePick, pickTime);
}