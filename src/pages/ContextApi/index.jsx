import { useContext, useState } from "react";
import { Context as ThemeContext } from "@/contexts/ThemeContext";

function A({ data }) {
    return <B data={data} />;
}

function B({ data }) {
    return <C data={data} />;
}

function C({ data }) {
    const { theme, toggle } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div>
            <h1>Current theme: {theme}</h1>
            <button onClick={window.toggleTheme}>Toggle</button>
        </div>
    );
}

function ContextApi() {
    console.log("ContextApi rendered");
    const data1 = "My Data";
    return (
        <div>
            <h1>Context Api</h1>
            <A data={data1} />
        </div>
    );
}

export default ContextApi;
