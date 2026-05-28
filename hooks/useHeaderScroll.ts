
import { useEffect, useRef, useState } from "react";

export function useHeaderScroll() {
      
    const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Если в самом верху — всегда показываем
      if (currentScrollY <= 0) {
        setVisible(true);
      }
      // Скролл вниз → скрыть
      else if (currentScrollY > lastScrollY.current) {
        setVisible(true);
      }
      // Скролл вверх → показать
      else {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return visible
}