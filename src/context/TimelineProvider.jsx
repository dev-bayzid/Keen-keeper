import { createContext } from "react";


export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {




    return (
        <TimelineContext.Provider>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;