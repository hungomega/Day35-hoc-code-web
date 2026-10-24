// import { useState } from "react";
// import useFormValues from "../Hooks/useFormValues";
import { Form, TextInput } from "../../components/Forms/index.js";

const initValues1 = {
    email: "",
    password: "",
};
const handleSubmit1 = (formValues) => {
    console.log(formValues);
};

const initValues2 = {
    email: "",
    password: "",
};
const handleSubmit2 = (formValues) => {
    console.log(formValues);
};
function Forms() {
    return (
        <div>
            <h1>Trang Forms</h1>
            <Form initValues={initValues1} onSubmit={handleSubmit1}>
                <TextInput
                    type="text"
                    placeholder="Enter Email..."
                    name="email"
                />
                <br />

                <TextInput
                    type="password"
                    placeholder="Enter password..."
                    name="password"
                />
                <br />

                <button type="submit">Login</button>
            </Form>{" "}
            <br />
            <Form initValues={initValues2} onSubmit={handleSubmit2}>
                <TextInput
                    type="text"
                    placeholder="Enter Email..."
                    name="email"
                />
                <br />

                <TextInput
                    type="password"
                    placeholder="Enter password..."
                    name="password"
                />
                <br />

                <button type="submit">Login</button>
            </Form>
        </div>
    );
}

export default Forms;
