// components/FadeInWhenVisible.jsx
import { useRef } from "react";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
export default function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
    className="z-100"

     initial={{ opacity: 0, scale: 0.5 }}
    animate={isInView ?  {opacity: 1, scale: 1}:{opacity: 0, scale: 0} }
    transition={{
        duration: 1,
        delay: 0.3,
        ease: [0, 0.71, 0.1, 1.01],
    }}
      ref={ref}
     
    >
      {children}
    </motion.div>
  );
}
