import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../slices/globalsSlice";

export const useSidebar = () => {
    const dispatch = useDispatch();

    const isSidebarOpened = useSelector(state => state.globals.isSidebarOpened);
    const handleSidebar = (newValue) => {
        dispatch(toggleSidebar(newValue));
    }

    return {
        isSidebarOpened,
        handleSidebar
    }
}