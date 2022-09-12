import Link from 'next/link'

function Card({ link, header, children }) {
  return (
    <Link href={link} passHref>
      <div className="cursor-pointer w-full h-full py-3 px-8 rounded-xl border-2 border-blue flex flex-col justify-start hover:scale-98 duration-300 ease-in-out">
        <h3 className="text-blue mb-1 mt-0 pt-0">{header}</h3>
        {children}
      </div>
    </Link>
  )
}

export default Card
