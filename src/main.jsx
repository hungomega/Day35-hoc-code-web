import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

import { Provider as ReduxProvider } from "react-redux";
import store from "@/store/store.jsx";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
);
