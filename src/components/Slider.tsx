import { PanInfo, motion } from "framer-motion";
import imgDev1 from "../public/img/imgDev1.jpg";
import imgDev2 from "../public/img/imgDev2.jpg";
import imgDev3 from "../public/img/imgDev3.jpg";
import { useState, useRef, useEffect } from "react";

const images = [imgDev1, imgDev2, imgDev3];

export default function Slider() {
  const [currentX, setCurrentX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      if (carousel.current) {
        setItemWidth(carousel.current.offsetWidth);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const direction = offset > 0 ? -1 : 1;
    const threshold = 50; // Define how sensitive the drag should be
    const newIndex = activeIndex + (Math.abs(offset) > threshold ? direction : 0);
    if (newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
      setCurrentX(-newIndex * itemWidth);
    }
  };

  return (
    <motion.div className="slider">
      <motion.div>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ left: -itemWidth * (images.length - 1), right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x: currentX }}
          animate={{ x: currentX }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index} style={{ minWidth: itemWidth }}>
              <img src={image} alt={`Imagem ${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
