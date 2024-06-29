import { createContext } from "react";

export const contextApp = createContext();

function useContextApi(props) {
    const emailOutlook = "  vikaskumar25273@outlook.com"
    const phone = " 9999735631"
    const location = " Delhi, India"
    const gitHub = " vikas20k"


    return (
        <div>
            <contextApp.Provider value={{ emailOutlook, phone, location, gitHub }}>
                {props.children}
            </contextApp.Provider>
        </div>
    )
}

export default useContextApi