import {USERACTIONTYPES} from "./user.types"
export const setCurrentUser=user=>({
'type': USERACTIONTYPES.SET_CURRENT_USER,
payload: user

})