import { RefObject, useCallback, useEffect } from "react";

interface IClickOutside {
  /** Referencia do container que, quando clicado fora dele, vai executar a funcao passada no onClickOutside */
  ref: RefObject<HTMLElement>;
  /** Funcao que vai ser executada quando o clique acontecer fora do container de referencia */
  onClickOutside: (event?: MouseEvent) => void;
}
function useClickOutside({ ref, onClickOutside }: IClickOutside) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onClickOutside(event);
      }
    },
    [ref, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}

export default useClickOutside;
