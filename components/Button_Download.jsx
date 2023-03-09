import Link from 'next/link'
import { DownloadIcon } from '@components/UI_Icons'

function Button_Download({ url, text }) {
  return (
    <div className="my-4 ">
      <Link href={url} passHref target={'_blank'}>
        <a className="mx-auto inline-block no-underline hover:scale-99 duration-100 ease-in-out">
          <div className="border-black border-2 text-black rounded-md py-4 px-12 hover:opacity-95 font-medium text-xl hover:bg-black group">
            <div className="flex flex-row justify-between gap-x-3 relative">
              <span className="text-black  self-center leading-none my-0 py-0 group-hover:text-white">
                {text}
              </span>
              <div className="group-hover:text-white relative block w-6 self-center ">
                <DownloadIcon />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
export default Button_Download
