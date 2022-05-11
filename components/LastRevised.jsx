import {
  format,
  formatDistance,
  parseISO,
  formatRelative,
  formatDistanceToNow,
} from 'date-fns'

function LastRevised({ revisedDate }) {
  const date = parseISO(revisedDate)

  return (
    <div className="italic text-wine-200">
      last revised{' '}
      <time dateTime={revisedDate}>{format(date, 'LLLL	d, yyyy')}</time>,{' '}
      {formatDistanceToNow(date, { addSuffix: true })}
    </div>
  )
}
export default LastRevised
