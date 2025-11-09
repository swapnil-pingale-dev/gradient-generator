import { useEffect, useState } from "react";
import ColorCard from "./components/ColorCard";
import Header from "./components/Header";
import ActionsMenu from "./components/ActionsMenu";
import BackToTop from "./components/BackToTop";


const App = () => {
  const [gradientType, setGradientType] = useState("linear-gradient");
  const [colorCount, setColorCount] = useState(2);
  const [gradientCards, setGradientCards] = useState([]);
  const [isCopied, setIsCopied] = useState(null)
  const [isDark, setIsDark] = useState((localStorage.getItem("theme")) || "light")



  useEffect(() => {
    let timerId;

    if(isCopied !== null){
      timerId = setTimeout(() => {
      setIsCopied(null)
    }, 3000)
    }

    return () => {clearTimeout(timerId)}

  })


  // Generate gradients function
  function generateGradientCards(type, count) {

    function generateOklch() {
       return Array.from( type === 'solid'? {length:1} : {length:count}, () => {
        const l = Math.floor(Math.random() * 75 + 20);
        const c = Number((Math.random() * 0.3 + 0.1).toFixed(1));
        const h = Math.floor(Math.random() * 360 + 1);

        return `oklch(${l}% ${c} ${h})`

     }) 
    }

    function generateDirection() {
      
      const radialShapes = ['circle', 'ellipse']

      if(gradientType === 'linear-gradient') {
       return `${Math.floor(Math.random() * 359 + 1)}deg`
      }

      if(gradientType === 'radial-gradient') {
        return `${radialShapes[Math.floor(Math.random() * radialShapes.length)]}`
      }

      if(gradientType === 'conic-gradient'){
        return `from 0deg at center`
      }

    }

    return Array.from({ length: 100 }, () => ({
      gradientType: type,
      colorCount: count,
      direction: generateDirection(),
      colors: generateOklch(),
    }));
  }

  // Called when form is submitted or button clicked
  function handleGenerate(type = gradientType, count = colorCount) {
    setGradientCards(generateGradientCards(type, count));
  }


  // Initial render
  useEffect(() => {
    handleGenerate();
  }, [colorCount, gradientType]);
 

  return (
    <main className="px-5 dark:bg-neutral-900 min-h-dvh pb-20">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <ActionsMenu
        setGradientTypefn={setGradientType}
        setColorCountfn={setColorCount}
        onGenerate={handleGenerate}
        // gradientCards={gradientCards}
        gradientType={gradientType}
      />
      <div className="section grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 ">
        {gradientCards.map((card, index) => (
          <ColorCard
            key={index}
            cardId={index}
            type={card.gradientType}
            direction={card.direction}
            colors={card.colors}
            isCopied = {isCopied} 
            setIsCopied = {setIsCopied}
          />
        ))}
      </div>
      <BackToTop />
    </main>
  );
};

export default App;
