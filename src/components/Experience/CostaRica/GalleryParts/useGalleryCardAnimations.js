import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useGalleryCardAnimations = (containerRef, refs) => {
  const { imageRef, overlayRef, eyeRef } = refs;

  const { contextSafe } = useGSAP({ scope: containerRef });

  // Initial setup for the eye
  useGSAP(() => {
    if (eyeRef.current) {
      gsap.set(eyeRef.current, { scale: 0.5, opacity: 0 });
    }
  }, { scope: containerRef });

  const onMouseEnter = contextSafe(() => {
    if (window.innerWidth < 768) return;

    // Aumenta suavemente la imagen
    gsap.to(imageRef.current, { scale: 1.1, duration: 0.7, ease: "power2.out", overwrite: true });
    
    // Suave oscurecimiento para que el ojo sea legible
    gsap.to(overlayRef.current, { backgroundColor: "rgba(0,0,0,0.3)", duration: 0.7, overwrite: true });

    // Aparece el ojo en el centro
    if (eyeRef.current) {
      gsap.to(eyeRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: "back.out(1.5)",
        overwrite: true
      });
    }
  });

  const onMouseLeave = contextSafe(() => {
    if (window.innerWidth < 768) return;

    // Vuelve al estado inicial
    gsap.to(imageRef.current, { scale: 1, duration: 0.7, ease: "power2.out", overwrite: true });
    gsap.to(overlayRef.current, { backgroundColor: "rgba(0,0,0,0)", duration: 0.7, overwrite: true });

    // Oculta el ojo
    if (eyeRef.current) {
      gsap.to(eyeRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        overwrite: true
      });
    }
  });

  return { onMouseEnter, onMouseLeave };
};
