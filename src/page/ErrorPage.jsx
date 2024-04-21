import { useRouteError } from "react-router-dom";
import "../components/css/error.css";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="block">
            <span id="title">Attention !</span>
            <div className="picture"></div>
            <p id="text">Tu vas trop vite ! La page n'a pas eu le temps de te suivre, il est temps de prendre une pause.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}