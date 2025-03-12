import { src, dest } from "gulp";
import { 
    JS_DEST_PATH, 
    REACT_JS_PATH, 
    CSS_DEST_PATH, 
    REACT_CSS_PATH 
} from "./task.const.js";

const moveReactJsTask = () => src(REACT_JS_PATH).pipe(dest(JS_DEST_PATH));
const moveReactCssTask = () => src(REACT_CSS_PATH).pipe(dest(CSS_DEST_PATH));

export {
    moveReactJsTask,
    moveReactCssTask,
}