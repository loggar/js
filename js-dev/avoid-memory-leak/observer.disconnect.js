const ref = {}; // something that you will observe
const visible = (visible) => {
  console.log(`It is ${visible}`);
};

useEffect(() => {
  if (!ref) {
    return;
  }

  observer.current = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) {
        visible(true);
      } else {
        visbile(false);
      }
    },
    { rootMargin: `-${header.height}px` }
  );

  observer.current.observe(ref);

  return () => observer.current?.disconnect();
}, [ref]);
