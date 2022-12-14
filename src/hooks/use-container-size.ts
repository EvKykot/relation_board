import { useCallback, useMemo, useRef, useState } from 'react';
import ResizeObserverPonyfill from 'resize-observer-polyfill';

const ResizeObserver = (window as any).ResizeObserver || ResizeObserverPonyfill;

/**
 *
 */
type Size = {
  width: number;
  height: number;
};

/**
 *
 */
type SetRef = (element: HTMLElement | null) => void;

/**
 *
 */
export const useContainerSize = (): [Size, SetRef] => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const innerRef = useRef<HTMLElement | null>(null);
  const prevSizeRef = useRef(size);

  /**
   *
   */
  const observer = useMemo(
    () =>
      new ResizeObserver((entries: any) => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }

        const [entry] = entries;
        const nextWidth = Math.round(entry.contentRect.width);
        const nextHeight = Math.round(entry.contentRect.height);
        const nextSize = { width: nextWidth, height: nextHeight };

        if (prevSizeRef.current.width === nextWidth && prevSizeRef.current.height === nextHeight) {
          return;
        }

        prevSizeRef.current = nextSize;
        setSize(nextSize);
      }),
    []
  );

  /**
   *
   */
  const setRef = useCallback(
    (element: HTMLElement | null) => {
      if (innerRef.current) observer.unobserve(innerRef.current);
      if (element) observer.observe(element);
      innerRef.current = element;
    },
    [observer]
  );

  return [size, setRef];
};
