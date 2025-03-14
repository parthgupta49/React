import { useSelector, useDispatch } from "react-redux";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

import { clearCart } from "../utils/redux/slices/cart";

const Cart = () => {

    const cart = useSelector((store) => store.cart.items);
    console.log("Cart in Cart.js page : ", cart);

    const dispatch = useDispatch()

    function handleClearCartClick() {
        dispatch(clearCart());
    }


    return (
        <>
            <div>
                <button onClick={handleClearCartClick}
                    className="absolute bg-white rounded-md border-2 z-10 px-8 left-[50%] py-1 -translate-x-[50%] -translate-y-[50%]  font-bold text-[#1BA672] text-lg"

                >Clear</button>
            </div>
            {
                cart.length === 0 ? <div>Your cart is empty</div> :
                    cart.map((item) => (
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
                                    onClick={() => handleAddItem(item)}
                                    className="absolute bg-white rounded-md border-2 z-10 px-8 left-[50%] py-1 -translate-x-[50%] -translate-y-[50%]  font-bold text-[#1BA672] text-lg"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))


            }
        </>
    )
}

export default Cart;