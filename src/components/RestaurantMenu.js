import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resData === null) {
        return "Loading... ";
    }
    const { name, areaName, avgRating, cuisines, cloudinaryImageId, totalRatingsString, costForTwoMessage } =
        resData?.cards[2]?.card?.card?.info;

    const menuItems =
        resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
            ?.itemCards;

    // console.log(resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories =
        resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c?.card?.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(categories);
    return (
        <div className="w-[65%] mx-auto">
            <h1 className="text-lg font-bold">{name}</h1>
            <div className="flex gap-2 font-semibold text-sm">
                <p className=" ">{avgRating}</p>
                <span className=" tracking-tighter">({totalRatingsString})</span>
                <span className=" tracking-tighter">{costForTwoMessage}</span>
            </div>
            {/* 
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                height={170}
                width={255}
            /> 
            */}

            <p className="text-[#02060C] text-sm">{areaName}</p>
            <p className="">
                {cuisines.map((item) => (
                    <span key={item} className="text-[#FF5200] text-[14px] font-semibold underline cursor-pointer">{item},</span>
                ))}
            </p>

            <div className="flex flex-col gap-10">
                {categories?.map((category, index) => (
                    // controlled component 
                    <RestaurantMenuCategory
                        key={category?.card?.card?.title}
                        categoryData={category}
                        isOpen={index === showIndex ? true : false}
                        setShowIndex={() => {
                            setShowIndex(index)
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
