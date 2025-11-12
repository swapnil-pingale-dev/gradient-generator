import { useEffect } from "react"
import { FrontendMentorSvg, GithubSvg, InstagramSvg, Linkedin, LogoSvg, MoonSvg, SunSvg } from "./SvgIcons"

import profile1 from '../assets/profile/profile-1.webp'
import profile2 from '../assets/profile/profile-2.webp'
import profile3 from '../assets/profile/profile-3.webp'
import profile4 from '../assets/profile/profile-4.webp'
import profile5 from '../assets/profile/profile-5.webp'


export default function Header({isDark, setIsDark, isProfileClicked, setIsProfileClicked}) {
 
const profile = [profile1, profile2, profile3, profile4, profile5]
const randomProfile = Math.floor(Math.random() * profile.length)

const handleProfileClick = () => {
  setIsProfileClicked(prev => !prev)
}


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
    <header className="px-5 pt-4  dark:bg-neutral-900">
      <div className="section flex items-center justify-between">
        <div className="flex items-center gap-2.5">
        <LogoSvg className="size-10 shrink-0" />
        <h1 className="hidden sm:block md:text-3xl font-bold  bg-linear-60 from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Gradient Generator
        </h1>
      </div>
      <div className="flex gap-2">
        <div>
          {isDark === "dark" ? (
            <button
              className="size-10 bg-neutral-800 text-neutral-50 rounded-full btn-animation cursor-pointer"
              onClick={handleTheme}
            >
              <SunSvg className="m-auto" />
            </button>
          ) : (
            <button className="size-10 bg-neutral-100 rounded-full btn-animation cursor-pointer"
              onClick={handleTheme}
            >
              <MoonSvg className="m-auto" />
            </button>
          )}
        </div>
        <div onClick={handleProfileClick} className="relative cursor-pointer shrink-0">
          <img 
            src={profile[randomProfile]}
            alt={profile[randomProfile]}
            className="rounded-full shrink-0 aspect-square size-10 border-2 border-neutral-200 dark:border-neutral-600 btn-animation"
          />
          <div className={`${isProfileClicked ? "flex open-social" : "hidden"} gap-4 absolute top-14 z-50 bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 px-5 py-2.5 rounded-full right-0`}>
            <a href="https://github.com/swapnil-pingale-dev" target="_blank" rel="noopener noreferrer">
              <GithubSvg className="size-6" />
            </a>
            <a href="https://www.frontendmentor.io/profile/swapnil-pingale-dev" target="_blank" rel="noopener noreferrer">
              <FrontendMentorSvg className="size-6" />
            </a>
            <a href="https://www.linkedin.com/in/swapnil-pingale-dev/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-6" />
            </a>
            <a href="https://www.instagram.com/swapnilpingale_dev" target="_blank" rel="noopener noreferrer">
              <InstagramSvg className="size-6" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}