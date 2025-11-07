import { LogoSvg } from "./SvgIcons"


export default function Header() {
  return (
    <header className="section flex items-center justify-between pt-4">
        <div className="flex items-center gap-2.5">
          <LogoSvg className="size-10 shrink-0"/>
        <h1 className="text-2xl md:text-3xl font-bold  bg-linear-60 from-purple-500 to-pink-500 bg-clip-text text-transparent">Gradient Generator</h1>
        </div>
    </header>
  )
}
