export function attachRipple(el) {
  if (!el) return;

  const handler = (event) => {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ctc-btn__ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    el.appendChild(ripple);
    ripple.addEventListener(
      "animationend",
      () => {
        ripple.remove();
      },
      { once: true }
    );
  };

  el.addEventListener("pointerdown", handler);

  return () => {
    el.removeEventListener("pointerdown", handler);
  };
}


