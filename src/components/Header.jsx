import { useEffect } from "react"
import { LogoSvg, MoonSvg, SunSvg } from "./SvgIcons"


export default function Header({isDark, setIsDark}) {

useEffect(() => {
  if (isDark === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", 'dark')
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem("theme", 'light')
  }
}, [isDark]);


  const handleTheme = () => {
      setIsDark(isDark === 'dark'? 'light' : 'dark')
  }

  return (
    <header className="section flex items-center justify-between pt-4">
        <div className="flex items-center gap-2.5">
          <LogoSvg className="size-10 shrink-0"/>
        <h1 className="text-2xl md:text-3xl font-bold  bg-linear-60 from-purple-500 to-pink-500 bg-clip-text text-transparent">Gradient Generator</h1>
        </div>
        <div>
          {isDark === "dark" ? (<button className="size-10 bg-neutral-800 text-neutral-50 rounded-full btn-animation cursor-pointer" onClick={handleTheme}><SunSvg className="m-auto" /></button>) : (<button  className="size-10 bg-neutral-100 rounded-full btn-animation cursor-pointer" onClick={handleTheme}><MoonSvg className="m-auto" /></button>)}
          
        </div>
    </header>
  )
}