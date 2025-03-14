import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from '../mocks/mockResMenu.json';
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/redux/appStore";
import { Provider } from "react-redux";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load restaurant Menu Component", async()=>{


    await act( async () => render(
    <Provider store = {appStore}>
        <BrowserRouter>
            <RestaurantMenu/>
        </BrowserRouter>
    </Provider>
))

    const accordianHeader = screen.getByText("Paratha");
    fireEvent.click(accordianHeader);

})