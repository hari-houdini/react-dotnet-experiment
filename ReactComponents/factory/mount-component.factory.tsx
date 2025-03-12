import { type FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * @function mountComponent
 * @description Mounts the React component on to the DOM Tree
 * @param Component
 * @param elementId Script ID that holds prop data for the component
 */
export default function mountComponent<T extends Record<string, any>>(
    Component: FC<T>,
    elementId: string
) {
    if (!elementId) {
        throw new Error("Element id is missing");
    }
    
    const el = document.getElementById(elementId);
    if (!el) {
        throw new Error(`Element is missing from DOM Tree. Make sure you're using a HTML tag with id=${elementId} in the Route CSHTML file`);
    }
    
    const componentPropsScriptEl = document.getElementById(`__${elementId}_REACT_APP__`);
    const args = componentPropsScriptEl && componentPropsScriptEl.innerHTML.length > 1 ?
        JSON.parse(componentPropsScriptEl.innerHTML) : {};
    const reactRoot = createRoot(el);
    reactRoot.render(
        <StrictMode>
            <div id={`react-app`}>
                <Component {...args} />
            </div>
        </StrictMode>
    )
}