import clsx from 'clsx'
import dayjs from 'dayjs'
import { FC } from 'react'

import { PdfInfo } from '../../stores/usePdfStore'

type Props = {
  pdfInfo: PdfInfo
  isActive: boolean
  onSelect: (pdfFile: PdfInfo) => void
}

const PdfCard: FC<Props> = (props) => {
  const { pdfInfo, isActive, onSelect } = props

  return (
    <div
      key={pdfInfo.id}
      className={clsx(
        'flex justify-between items-center p-4 shadow-md rounded-lg bg-white',
        { 'bg-cyan-100': isActive },
      )}
    >
      <div>
        <h4 className="text-lg font-semibold">ID: {pdfInfo.id}</h4>
        <p className="text-gray-500">
          Created: {dayjs(pdfInfo.createdDate).format('DD.MM.YYYY HH:mm')}
        </p>
      </div>
      <button
        onClick={() => onSelect(pdfInfo)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Select
      </button>
    </div>
  )
}

export default PdfCard
