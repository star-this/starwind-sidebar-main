// sw-sidebar-main.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwSidebarMainLayout = createStarwindElement({
  gap: { var: "--sw-sidebar-main-gap", type: "space" },
  size: { var: "--sw-sidebar-main-size", type: "space" },
  "content-min": { var: "--sw-sidebar-main-content-min", type: "raw" },
  align: { var: "--sw-sidebar-main-align", type: "raw" },
});

export function defineSwSidebarMain() {
  defineElement("sw-sidebar-main", SwSidebarMainLayout);
}
