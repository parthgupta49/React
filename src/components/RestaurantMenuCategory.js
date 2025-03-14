import { IoIosArrowDown, IoIosArrowUp, IoMdArrowDown } from "react-icons/io";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/slices/cart";
const RestaurantMenuCategory = ({ categoryData, isOpen, setShowIndex }) => {
    const { title, itemCards } = categoryData?.card?.card;

    const dispatch = useDispatch();

    function handleAddItem(item) {
        // Dispatch an action

        dispatch(addItem(item));

        /**
         * {payload : "pizza"}
         */
    }





    // current position for the dropdown - is it open or closed - based on that the icon will also get changed

    // const [localIsOpen,setLocalIsOpen] = useState(isOpen);

    return (
        <div className="border-[#02060C] border-t-[16px] border-opacity-5 w-full">
            <div className="w-[96%] mx-auto">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => {
                        setShowIndex();
                    }}
                >
                    <h1 className="font-bold text-lg pt-[1rem]">
                        {title} ({itemCards.length})
                    </h1>
                    <button>
                        {isOpen ? (
                            <IoIosArrowUp className="text-xl" />
                        ) : (
                            <IoIosArrowDown className="text-xl" />
                        )}
                    </button>
                </div>
                <div className="flex flex-col">
                    {isOpen &&
                        itemCards?.map((item) => (
                            <div
                                key={item?.card?.info?.id}
                                className="flex justify-between gap-5 pt-10 border-b-2"
                            >
                                <div>
                                    <p className="#02060C opacity-75 font-semibold">
                                        {item?.card?.info?.name}
                                    </p>
                                    <p className="text-[15px] font-semibold">
                                        ₹{" "}
                                        {item?.card?.info?.price / 100 ||
                                            item?.card?.info?.defaultPrice / 100}
                                    </p>
                                    <p className="text-xs text-[#96d2bc] font-semibold">
                                        {item?.card?.info?.ratings?.aggregatedRating?.rating}
                                    </p>
                                </div>
                                <div className=" relative pb-10">
                                    <img
                                        src={`${CLOUDINARY_IMAGE_URL}${item?.card?.info?.imageId}`}
                                        className=" relative w-[156px] h-[144px] object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={()=>handleAddItem(item)}
                                        className="absolute bg-white rounded-md border-2 z-10 px-8 left-[50%] py-1 -translate-x-[50%] -translate-y-[50%]  font-bold text-[#1BA672] text-lg"
                                    >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default RestaurantMenuCategory;
