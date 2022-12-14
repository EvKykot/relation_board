import { useEffect, RefObject, useCallback } from 'react';

type OutsideEvent = 'click' | 'contextmenu';

type UseOutsideClickProps = {
  ref: RefObject<HTMLDivElement>;
  isActive: boolean;
  callback: () => void;
  keyCodes?: number[];
  mouseEvents?: OutsideEvent[];
};

const DEFAULT_MOUSE_EVENTS: OutsideEvent[] = ['click', 'contextmenu'];

export default function useOutsideClick(props: UseOutsideClickProps): void {
  const { ref, isActive, callback, mouseEvents = DEFAULT_MOUSE_EVENTS, keyCodes } = props;

  const handleClick = useCallback(
    (e: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        callback();
      }
    },
    [ref, callback]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (keyCodes && keyCodes.includes(e.keyCode)) callback();
    },
    [keyCodes, callback]
  );

  useEffect(() => {
    if (isActive) {
      mouseEvents.map((event) => document.addEventListener(event, handleClick));
      if (keyCodes) document.addEventListener('keydown', handleKeyDown);
    }

    return (): void => {
      mouseEvents.map((event) => document.removeEventListener(event, handleClick));
      if (keyCodes) document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, keyCodes, mouseEvents, isActive, callback, handleKeyDown, handleClick]);
}
