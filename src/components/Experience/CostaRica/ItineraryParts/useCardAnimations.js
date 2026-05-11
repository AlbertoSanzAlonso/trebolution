import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useCardAnimations = (containerRef, refs) => {
  const { 
    contentRef, petalRef, imageRef, overlayRef, 
    hoverInfoRef, logoRef, verMasRef, textBlockRef, 
    dateRef, titleRef, descRef, hotelInfoRef 
  } = refs;

  useGSAP(() => {
    // Initial state
    gsap.set(contentRef.current, { y: 0 });
    gsap.set(petalRef.current, {
      scale: 5,
      rotate: 20,
      x: "50%",
      y: "70%",
      transformOrigin: 'center'
    });
    gsap.set(imageRef.current, { scale: 1 });
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(hoverInfoRef.current, { opacity: 0, y: 20 });
  }, { scope: containerRef });

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onMouseEnter = contextSafe(() => {
    if (window.innerWidth < 768) return;

    gsap.to(contentRef.current, { y: "-35%", duration: 0.8, ease: "power4.inOut", overwrite: true });
    gsap.to([dateRef.current, titleRef.current, descRef.current, hotelInfoRef.current], { 
      x: "50%", xPercent: -50, duration: 0.8, ease: "power4.inOut", overwrite: true 
    });
    gsap.to(textBlockRef.current, { scale: 1.2, transformOrigin: "center center", duration: 0.8, ease: "power4.inOut", overwrite: true });
    gsap.to(hotelInfoRef.current, { justifyContent: "center", duration: 0.8, ease: "power4.inOut", overwrite: true });
    gsap.to(hoverInfoRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out", overwrite: true });
    gsap.to(logoRef.current, { rotate: 360, duration: 1.5, ease: "power2.inOut", overwrite: true });
    gsap.to(petalRef.current, { scale: 30, rotate: 0, x: "-50%", y: "50%", duration: 1.2, ease: "power3.inOut", overwrite: true });
    gsap.to(verMasRef.current, { opacity: 0.5, duration: 0.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.8 });
    gsap.to(imageRef.current, { scale: 1.2, duration: 1.5, ease: "power2.out", overwrite: true });
    gsap.to(overlayRef.current, { opacity: 0.4, duration: 0.6, overwrite: true });
    gsap.to(containerRef.current, { scale: 1.02, duration: 0.8, ease: "power2.out", overwrite: true });
  });

  const onMouseLeave = contextSafe(() => {
    if (window.innerWidth < 768) return;

    gsap.to(contentRef.current, { y: "0%", duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to([dateRef.current, titleRef.current, descRef.current, hotelInfoRef.current], { 
      x: "0%", xPercent: 0, duration: 0.6, ease: "power2.out", overwrite: true 
    });
    gsap.to(textBlockRef.current, { scale: 1, duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to(hotelInfoRef.current, { justifyContent: "flex-start", duration: 0.6, ease: "power2.out", overwrite: true });
    gsap.to(hoverInfoRef.current, { opacity: 0, y: 20, duration: 0.3, overwrite: true });
    gsap.to(logoRef.current, { rotate: 0, duration: 0.5, overwrite: true });
    gsap.killTweensOf(verMasRef.current);
    gsap.to(verMasRef.current, { opacity: 0, duration: 0.3, overwrite: true });
    gsap.to(petalRef.current, { scale: 5, rotate: 20, x: "50%", y: "70%", duration: 0.8, ease: "power2.inOut", overwrite: true });
    gsap.to(imageRef.current, { scale: 1, duration: 0.4, ease: "power2.out", overwrite: true });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, overwrite: true });
    gsap.to(containerRef.current, { scale: 1, duration: 0.4, ease: "power2.out", overwrite: true });
  });

  return { onMouseEnter, onMouseLeave };
};
