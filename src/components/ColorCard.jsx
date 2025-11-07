import { CopySvg } from "./SvgIcons";
import 'animate.css';

export default function ColorCard({type, direction, colors}) {

type === "conic-gradient" && colors.push(colors[0])


const tailwindColors = colors.map(color => color?.split(" ")?.join("_"))
const tailwinddirection = direction?.split(" ")?.join("_")

const cssSnippet = type === 'solid' ? `background-color: ${colors[0]}` : `background-image: ${type}(${direction}, ${colors?.join(', ')})`;
const tailwindSnippet = type === 'solid' ? `bg-[${colors[0]?.split(" ").join("_")}]` : `bg-[${type}(${tailwinddirection},${tailwindColors?.join(',')})]`;




  const handleCssTextCopy = (code) => {
      navigator.clipboard.writeText(code)
  }

  return (
    <div className="animate__animated animate__slideInDown bg-neutral-50 border border-neutral-100 rounded-lg min-h-40 p-3 flex flex-col justify-between animate__slideInUp">

      {/* gradient color */}
        <div style={type === 'solid' ? {backgroundColor: `${colors[0]}`} :{backgroundImage: `${type}(${direction}, ${colors?.join(", ")})`}} className="h-full w-full rounded-lg bg-neutral-300"></div>
      
      {/* copy button container */}
        <div className="flex gap-1.5 mt-3">


      {/* CSS Snippet Copy Button */}
          <button className="ml-auto px-3 py-1 flex items-center gap-1 text-sm font-mono bg-neutral-200 border border-neutral-300 hover:bg-neutral-300 text-neutral-800 transition-all! duration-300 rounded-full cursor-pointer btn-animation" onClick={() => {handleCssTextCopy(cssSnippet)}}>CSS <CopySvg className="size-3"/></button>

          {/* tailwind Snippet Copy Button */}
          <button className="px-3 py-1 flex items-center gap-1 text-sm font-mono bg-neutral-200 border border-neutral-300 hover:bg-neutral-300 text-neutral-800 transition-all! duration-300 rounded-full cursor-pointer btn-animation" onClick={() => {handleCssTextCopy(tailwindSnippet)}}>Tailwind <CopySvg className="size-3"/></button>
          </div>
    </div>
  )
}
