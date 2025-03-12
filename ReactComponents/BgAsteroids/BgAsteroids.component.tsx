import React from "react";
import { Tranquiluxe } from "uvcanvas"
import mountComponent from "../factory/mount-component.factory";
import "@/styles/globals.css";

type BgAsteroidsProps = {
    version: string;
    build_number: string;
    build_date: string;
}

// try using type decorators
export const BgAsteroids = (props: BgAsteroidsProps) => {
    return (
        <div className={"container"}>
            <div className={"-bg-conic-210"}>{props.build_date}</div>
            <Tranquiluxe />
        </div>
    );
}

mountComponent(BgAsteroids, "test-loc");
