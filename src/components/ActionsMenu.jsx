import { useRef } from "react";
import { GenerateSvg } from "./SvgIcons";
import 'animate.css';

export default function ActionsMenu({ setGradientTypefn, setColorCountfn, onGenerate }) {
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
    <div className="section my-15 flex justify-center">
      <form className="animate__animated animate__fadeInDown flex flex-wrap md:flex-nowrap gap-4 bg-neutral-50 border border-neutral-100 p-5 rounded-2xl md:rounded-full" ref={form} onSubmit={handleFormSubmit}>
  
          <input
          className="w-full border-2 border-neutral-200 bg-neutral-50 rounded-full px-2.5 py-1"
          name="color-count"
          type="number"
          min="2"
          placeholder="Colors count"
          defaultValue="2"
        />

        <select
          className="border-2 w-full border-neutral-200 bg-neutral-50 rounded-full px-2.5 py-1 cursor-pointer"
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
          className="btn-animation bg-neutral-800 hover:bg-neutral-900 flex shrink-0 items-center justify-center gap-2.5 w-full md:w-auto py-1 px-4 rounded-full cursor-pointer text-neutral-50 font-medium text-xl"
        > <GenerateSvg className="size-4 shrink-0" />
          Regenerate
        </button>
      </form>
    </div>
  );
}
