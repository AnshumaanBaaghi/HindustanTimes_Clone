
export const FindMonth = (m) => {
    switch (m) {
        case 1: {
            return "Jan"
        }
        case 2: {
            return "Feb"
        }
        case 3: {
            return "Mar"
        }
        case 4: {
            return "Apr"
        }
        case 5: {
            return "May"
        }
        case 6: {
            return "June"
        }
        case 7: {
            return "July"
        }
        case 8: {
            return "Aug"
        }
        case 9: {
            return "Sep"
        }
        case 10: {
            return "Oct"
        }
        case 11: {
            return "Nov"
        }
        case 12: {
            return "Dec"
        }
    }
}

export const LoginFunction = (payload) => ({
    type: "LOGIN",
    payload: payload
})
export const LoginStatus = (payload) => ({
    type: "LOGINSTATUS",
    payload: payload
})
export const ProfileSideBar = (payload) => ({
    type: "PROFILESIDEBAR",
    payload: payload
})
export const LeftSideBarAction = (payload) => ({
    type: "LEFTSIDEBAR",
    payload: payload
})