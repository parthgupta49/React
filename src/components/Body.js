import React, { useEffect, useState, useContext } from "react";
import { API_URL, API_URL_2 } from "../utils/constants";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetch(`${API_URL_2}`)
            .then((response) => response.json())
            .then((json) => {
                const actualStuff = json.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants;
                if (actualStuff) {
                    setData(actualStuff);
                    setFilteredData(actualStuff);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function buttonHandler() {
        const newData = data.filter((object) => object.info.avgRating > 4);
        setFilteredData(newData);
    }

    function searchBtnHandler() {
        const newData = data.filter((object) =>
            object?.info?.cuisines
                ?.join("")
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
        );
        setFilteredData(newData);
    }

    const onlineStatus = useOnlineStatus();
    const [searchText, setSearchText] = useState("");

    if (!onlineStatus) {
        return <h1>Looks Like you are not connected</h1>;
    }

    return (
        <div className="w-full px-10">
            <div className="search">
                <button className="btn" onClick={buttonHandler}>
                    Top Restaurants
                </button>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Here"
                        data-testid="searchInput"
                        className="search-box"
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                        value={searchText}
                    />
                    <button className="btn" onClick={searchBtnHandler}>
                        Search
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap gap-4">
                {filteredData.map((item) => {
                    return (
                        <Link to={`/restaurants/${item.info.id}`} key={item.info.id}>
                            {item.info.isOpen ? (
                                <RestaurantCardPromoted data={item.info} key={item.info.id} />
                            ) : (
                                <RestaurantCard data={item.info} key={item.info.id} />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;