import ReactDOM from "react-dom";

export default function ReactPortal({ containerId = "portal-root", children }) {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.append(container);
  }
  // return ReactDOM.createPortal(children, container)
  return ReactDOM.createPortal(children, container);
}
