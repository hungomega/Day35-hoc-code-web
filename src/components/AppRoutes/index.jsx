import { Routes, Route, Router } from "react-router";
// pages
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import DefaultLayout from "@/layouts/DefaultLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import PostDetail from "@/pages/PostDetail";
import UseState from "@/pages/UseState";

import ScrollToTop from "../ScrollToTop";
import Cleanup from "@/pages/Cleanup";
import Cleanup2 from "@/pages/Cleanup2";
import Hooks from "@/pages/Hooks";
import HOC from "@/pages/HOC";
import RenderProps from "@/pages/RenderProps";
import CustomHook from "@/pages/CustomHook";
import Debounce from "@/pages/Debounce";
import TabsDemo from "@/pages/TabsDemo";
import Forms from "@/pages/Forms";
import ContextApi from "@/pages/ContextApi";
import Redux from "@/pages/Redux";
import Example2 from "@/pages/Redux/example2";

function AppRoutes() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* <Route element={<AdminLayout />}>
                <Route path="contact" element={<Home />} />
                <Route element={<Dashboard />}></Route>
            </Route> */}

                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/use-state" element={<UseState />} />
                    <Route path="/news/:id" element={<PostDetail />} />
                    <Route path="/news" element={<News />} />
                    <Route path="cleanup" element={<Cleanup />} />
                </Route>

                <Route element={<SidebarLayout />}>
                    <Route path="/contact" element={<Contact />} />
                </Route>

                <Route path="use-state" element={<UseState />} />
                <Route path="cleanup2" element={<Cleanup2 />} />
                <Route path="hooks" element={<Hooks />} />
                <Route path="hoc" element={<HOC />} />
                <Route path="render-props" element={<RenderProps />} />
                <Route path="custom-hook" element={<CustomHook />} />
                <Route path="debounce" element={<Debounce />} />
                <Route path="/tabs-demo" element={<TabsDemo />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/ContextApi" element={<ContextApi />} />
                <Route path="/Redux" element={<Redux />} />
                <Route path="/Redux/example2" element={<Example2 />} />
            </Routes>
        </>
    );
}

export default AppRoutes;
