import {
  Container,
  Footer,
  FooterButtonsContainer,
  ModalButton,
  Overlay,
} from "./styles";
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

export default function Modal({ title, children, visible, onCancel }: Props) {
  const modalContainerRef = useRef<HTMLDivElement>(null);

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
          <Footer>
            <h4>Descrição</h4>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
            </p>
            <h4>Downloads</h4>

            <FooterButtonsContainer>
              <ModalButton variant="green">Spreadsheet.xls</ModalButton>
              <ModalButton variant="blue">Document.doc</ModalButton>
              <ModalButton variant="yellow">Presentation.ppt</ModalButton>
            </FooterButtonsContainer>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
