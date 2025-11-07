import { CheckedSvg } from './SvgIcons'

export default function Toast() {
  return (
    <div className='flex items-center gap-2.5 bg-neutral-900 py-1.5 px-3'>
        <CheckedSvg className="text-green-500"/>
        <p>Gradient CSS copied to clipboard!</p>
    </div>
  )
}
