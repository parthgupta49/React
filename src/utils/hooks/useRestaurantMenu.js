import { useEffect, useState } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
    // somehow fetch the data and return the data
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    async function fetchData() {
        try {
            const response = await fetch(MENU_API + resId);
            const data = await response.json();
            setResInfo(data?.data);

        } catch (error) {
            console.log(`error while fetching ${resId} restaurant data`, error);
            console.log(error.message);
            setResInfo(null);
        }
    }

    return resInfo;
}
export default useRestaurantMenu;