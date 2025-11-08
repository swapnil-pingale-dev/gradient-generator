import { CheckedSvg, CopySvg } from "./SvgIcons";

export default function ColorCard({cardId, type, direction, colors, isCopied,  setIsCopied}) {


type === "conic-gradient" && colors.push(colors[0])


const tailwindColors = colors.map(color => color?.split(" ")?.join("_"))
const tailwinddirection = direction?.split(" ")?.join("_")

const cssSnippet = type === 'solid' ? `background-color: ${colors[0]}` : `background-image: ${type}(${direction}, ${colors?.join(', ')})`;
const tailwindSnippet = type === 'solid' ? `bg-[${colors[0]?.split(" ").join("_")}]` : `bg-[${type}(${tailwinddirection},${tailwindColors?.join(',')})]`;


  const handleCssTextCopy = (code) => {
      navigator.clipboard.writeText(code)
  }

  const handleCopy = (cardID) => {
    setIsCopied(cardID);
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-lg min-h-40 p-3 flex flex-col justify-between">

      {/* gradient color */}
        <div style={type === 'solid' ? {backgroundColor: `${colors[0]}`} :{backgroundImage: `${type}(${direction}, ${colors?.join(", ")})`}} className="h-full w-full rounded-lg bg-neutral-300"></div>
      
      {/* copy button container */}
        <div className="flex gap-1.5 mt-3">


      {/* CSS Snippet Copy Button */}
            <button className="w-1/2 px-3 py-1 flex items-center justify-center gap-1 text-sm font-mono bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-50 border border-neutral-300 dark:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-800 transition-all! duration-300 rounded-full cursor-pointer btn-animation" onClick={() => {handleCssTextCopy(cssSnippet); handleCopy(`${cardId}a`) }}>{isCopied === `${cardId}a` ? <><CheckedSvg className="size-3"/> Copied</> : <>CSS <CopySvg className="size-3" /></> }</button>
  

          {/* tailwind Snippet Copy Button */}
          <button className="w-1/2 px-3 py-1 flex items-center justify-center gap-1 text-sm font-mono bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-50 border border-neutral-300 dark:border-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-800 transition-all! duration-300 rounded-full cursor-pointer btn-animation" onClick={() => {handleCssTextCopy(tailwindSnippet); handleCopy(`${cardId}b`)}}>{isCopied === `${cardId}b` ? <><CheckedSvg className="size-3"/> Copied</> : <>Tailwind <CopySvg className="size-3" /></> }</button>
          </div>
    </div>
  )
}
