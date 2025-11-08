import { useRef } from "react";
import { GenerateSvg } from "./SvgIcons";

export default function ActionsMenu({ setGradientTypefn, setColorCountfn, onGenerate, gradientType }) {
  const form = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const colorCount = Number(formData.get("color-count"));
    const gradientType = formData.get("gradient-type");

    // Update parent states
    setColorCountfn(colorCount);
    setGradientTypefn(gradientType);

    // Generate gradients with latest values
    onGenerate(gradientType, colorCount);
  };

  return (
    <div className="section bg-transparent md:sticky top-6 my-15 flex justify-center">
      <form className="max-w-2xl w-full flex flex-wrap md:flex-nowrap gap-4 bg-neutral-50/50 dark:bg-neutral-800/50 backdrop-blur-lg border border-neutral-100 dark:border-neutral-700 p-5 rounded-2xl md:rounded-full" ref={form} onSubmit={handleFormSubmit}>
  
          <input
          className="w-full border-2 border-neutral-200 dark:border-neutral-700 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-800 rounded-full text-lg px-4 py-2"
          name="color-count"
          type="number"
          min="2"
          defaultValue={gradientType === 'solid' ? 1 : 2}
          disabled={gradientType === 'solid'}
        />

        <select
          className="w-full border-2 border-neutral-200 dark:border-neutral-700 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-800 rounded-full text-lg px-4 py-2"
          name="gradient-type"
          defaultValue="linear-gradient"
        >
          <option value="linear-gradient">Linear Gradient</option>
          <option value="radial-gradient">Radial Gradient</option>
          <option value="conic-gradient">Conic Gradient</option>
          <option value="solid">Solid</option>
        </select>

        <button
          type="submit"
          className="btn-animation bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 hover:bg-neutral-900 dark:hover:bg-neutral-200 flex shrink-0 items-center justify-center gap-2.5 w-full md:w-auto py-2 px-4 rounded-full cursor-pointer text-neutral-50 font-medium text-xl"
        > <GenerateSvg className="size-4 shrink-0" />
          Regenerate
        </button>
      </form>
    </div>
  );
}
