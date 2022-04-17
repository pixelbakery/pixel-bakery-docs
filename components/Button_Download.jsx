import Link from 'next/link'

function Button_Download({ url, text }) {
  return (
    <div className="flex justify-center my-12">
      <Link href={url} passHref>
        <a className="mx-auto inline-block no-underline">
          <div className="bg-blue text-cream rounded-sm py-2 px-12 hover:opacity-95 font-semibold text-xl">
            <span>{text}</span>
          </div>
        </a>
      </Link>
    </div>
  )
}
export default Button_Download
