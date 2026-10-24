import { useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "@/components/Tabs";
function TabsDemmo() {
    return (
        <>
            <div>
                <h1>Tabs Demo</h1>
                <Tabs>
                    <Tab tittle="Tab 1">Content of Tab1</Tab>
                    <Tab tittle="Tab 2">Content of Tab2</Tab>
                    <Tab tittle="Tab 3">Content of Tab3</Tab>
                </Tabs>
            </div>
        </>
    );
}
export default TabsDemmo;
