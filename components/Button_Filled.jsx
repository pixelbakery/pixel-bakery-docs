import Link from 'next/link'
import { ChevronRightIcon, DownloadIcon } from 'components/UI_Icons/index'
import cn from 'classnames'

function Button_Filled({
  center,
  text,
  link,
  textColor,
  bgColor,
  chevronDirection,
}) {
  let chevronRotation = ''
  if (chevronDirection === 'right') {
    chevronRotation = ''
  } else if (chevronDirection === 'down') {
    chevronRotation = 'rotate-90'
  } else if (chevronDirection === 'left') {
    chevronRotation = 'order-first rotate-180'
  } else if (chevronDirection === 'up') {
    chevronRotation = ' -rotate-90'
  } else if (chevronDirection === 'download') {
    chevronRotation = ''
  } else {
    chevronRotation = ''
  }
  return (
    <Link href={link} passHref>
      <div
        className={cn(
          ' my-3 py-3 rounded-sm px-6 w-full max-w-sm  text-center cursor-pointer transition-all ease-in-out duration-400 hover:scale-99 drop-shadow-sm hover:drop-shadow-xs',
          `bg-${bgColor}`,
          { ['mx-auto']: center }
        )}
      >
        <div className={cn(' font-extrabold text-xl lowercase flex')}>
          <div
            className={cn(
              'text-center flex-grow flex flex-col justify-center leading-none',
              `text-${textColor}`
            )}
          >
            {text}
          </div>

          <i
            className={cn(
              'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center',
              chevronRotation,
              `text-${textColor}`
            )}
          >
            {chevronDirection === 'download' ? (
              <DownloadIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </i>
        </div>
      </div>
    </Link>
  )
}

export default Button_Filled
