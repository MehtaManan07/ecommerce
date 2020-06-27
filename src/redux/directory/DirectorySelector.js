import { createSelector } from "reselect";

const seleceDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
    [seleceDirectory],
    directory => directory.sections
)