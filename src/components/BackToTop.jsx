import { useEffect, useState } from "react";
import { BackToTopSvg } from "./SvgIcons";

export default function BackToTop() {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setisVisible(true) : setisVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goToTop}
      className={`${
        isVisible ? "fixed bottom-5 right-5" : "hidden"
      } bg-neutral-800 size-12 rounded-full btn-animation cursor-pointer`}
    >
      <BackToTopSvg className="text-neutral-100 m-auto" />
    </button>
  );
}
