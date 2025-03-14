import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            Error
            {err.status}
            {err.statusText}
        </div>
    )
}
export default Error;