import React from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
const RestaurantCard = ({ data }) => {

    const {
        name,
        cloudinaryImageId,
        areaName,
        avgRating,
        cuisines,
        id
    } = data;

    // console.log("Lets see the data :  ",data);
    const cuisinesArray = [];
    cuisines.map((item) => cuisinesArray.push(item));
    // console.log(cuisinesArray);
    const items = cuisinesArray.join(" ,").substring(0, 30);
    const cloudinaryImageUrl = CLOUDINARY_IMAGE_URL + cloudinaryImageId;

    return (
        <div className="card p-2 w-fit transition-all duration-200" data-testid = "resCard">
            <img
                src={cloudinaryImageUrl}
                alt={name}
                // height={170}
                // width={255}
                className=" rounded-2xl w-[255px] h-[170px] object-cover"
            />
            <h2 className="font-bold ">{name}</h2>
            <p className="res-card-avgRating">{avgRating} stars</p>
            <span>{items}</span>
            <p className="res-card-areaName">{areaName}</p>
        </div>
    );
};

// Higher Order Component
// input - ResCard ==> ResCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard data = {props.data} />
            </div>
        )
    }
}

export default RestaurantCard;
