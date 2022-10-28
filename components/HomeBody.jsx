import { TabList, Tab, Widget, Tag, Table, Form } from "web3uikit";
import { useEffect, useState } from "react";
import Dao from "./Dao"
import Link from "next/link";

export default function HomeBody(){
    return (
        <>
            <li className="content">
                <TabList defaultActiveKey={1} tabStyle="bulbUnion">
                    <Tab tabKey={1} tabName="DAO">
                        <Dao />
                    </Tab>
                    <Tab tabKey={2} tabName="Forum">
                    </Tab>
                    <Tab tabKey={3} tabName="Docs"></Tab>
                </TabList>
                <div className="h-20"></div>
            </li>
            <div className="voting"></div>
        </>
    )
}