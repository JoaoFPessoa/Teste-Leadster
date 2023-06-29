import { Container, Footer, Overlay } from "./styles";
import ReactPortal from "../ReactPortal";
import { useRef } from "react";
import useAnimatedUnmount from "../../hooks/useAnimatedUnmount";
import useClickOutside from "@/hooks/useClickOutside";
import { YouTubePlayer, YouTubeProps } from "react-youtube";

type Props = {
  title: string;
  url: string;
  children?: JSX.Element;
  isLoading?: boolean;
  visible: boolean;
  onCancel: any;
};

export default function Modal({
  title,
  children,
  isLoading = true,
  visible,
  onCancel,
}: Props) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  console.log({ visible });

  useClickOutside({
    ref: modalContainerRef,
    onClickOutside: () => onCancel(),
  });

  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  let container = document.getElementById("modal-root");
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isClosing={!visible} ref={animatedElementRef}>
        <Container ref={modalContainerRef} isClosing={!visible}>
          <h1>
            <span>Webinar: </span>
            {title}{" "}
          </h1>
          <div className="modal-body">{children}</div>
          <Footer></Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
