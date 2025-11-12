import { GenerateSvg } from "./SvgIcons";

export default function ActionsMenu({ setGradientTypefn, setColorCountfn, onGenerate, gradientType, colorCount }) {


  const handleColorCountChange = (e) => {
      const inputValue = Number(e.target.value)

      // if(inputValue > 1 && gradientType !== 'solid') setColorCountfn(inputValue)

      if(gradientType !== 'solid') setColorCountfn(inputValue)
      

  }

    const handlegradientTypeChange = (e) => {
      const selectValue = e.target.value

      setGradientTypefn(selectValue)

      selectValue === 'solid'? setColorCountfn(1) : setColorCountfn(2)
  }

  return (
    <div className="section bg-transparent md:sticky top-0 z-40 py-16 flex justify-center">
      <div
        className="max-w-2xl w-full flex flex-wrap md:flex-nowrap gap-4 bg-neutral-50/50 dark:bg-neutral-800/50 backdrop-blur-lg border border-neutral-100 dark:border-neutral-700 p-5 rounded-2xl md:rounded-full">
        <input
          className="w-full border-2 border-neutral-200 dark:border-neutral-700 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-800 rounded-full text-lg px-4 py-2"
          name="color-count"
          type="number"
          min={gradientType === 'solid'? "1" : "2"}
          max={gradientType === 'solid'? '1' : undefined}
          disabled = {gradientType === 'solid' ? true : false}
          value={colorCount}
          onChange={handleColorCountChange}

        />

        <select
          className="w-full border-2 border-neutral-200 dark:border-neutral-700 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-800 rounded-full text-lg px-4 py-2 cursor-pointer"
          name="gradient-type"
          defaultValue="linear-gradient"
          onChange={handlegradientTypeChange}
        >
          <option value="linear-gradient">Linear Gradient</option>
          <option value="radial-gradient">Radial Gradient</option>
          <option value="conic-gradient">Conic Gradient</option>
          <option value="solid">Solid</option>
        </select>

        <button
          type="submit"
          className="generate-btn-animation bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 hover:bg-neutral-900 dark:hover:bg-neutral-200 flex shrink-0 items-center justify-center gap-2.5 w-full md:w-auto py-2 px-4 rounded-full cursor-pointer text-neutral-50 font-medium text-xl"
          onClick={() => {onGenerate()}}
        >
          <GenerateSvg className="size-4 shrink-0" />
          Regenerate
        </button>
      </div>
    </div>
  );
}
