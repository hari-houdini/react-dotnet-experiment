import { Tranquiluxe } from "uvcanvas"
import mountComponent from "../factory/mount-component.factory";

type BgAsteroidsProps = {
    version: string;
    build_number: string;
    build_date: string;
}

// try using type decorators
export const BgAsteroids = (props: BgAsteroidsProps) => {
    return (
        <>
            <Tranquiluxe />
        </>
    );
}

mountComponent(BgAsteroids, "test-loc");
