import { createSelector } from "reselect"

const selectUser = state => state.selectUser
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)