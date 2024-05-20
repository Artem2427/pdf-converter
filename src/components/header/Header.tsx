import clsx from 'clsx'
import { BaseSyntheticEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { mutations } from '../../api/mutations'
import { storageService } from '../../services/storage-service'
import { PdfInfo, usePdfStore } from '../../stores/usePdfStore'
import { PDF_HISTORY_LIST } from '../../utils/constants'

function textToBinaryBuffer(str: string) {
  const length = str.length
  const buffer = new ArrayBuffer(length)
  const bufferView = new Uint8Array(buffer)
  for (let i = 0; i < length; i++) {
    bufferView[i] = str.charCodeAt(i)
  }
  return buffer
}

const Header = () => {
  const [text, setText] = useState('')

  const [pdfHistory, setPdfHistory] = usePdfStore((state) => [
    state.pdfHistory,
    state.setPdfHistory,
  ])

  const handleChangeText = (event: BaseSyntheticEvent) => {
    setText(event.target.value)
  }

  const handleConvert = async () => {
    const copyPdfHistory = [...pdfHistory]
    const result = await mutations.generatePdf(text)

    const blob = new Blob([result.data], {
      type: 'application/pdf',
    })

    const newPdfInfo: PdfInfo = {
      id: uuidv4(),
      url: URL.createObjectURL(blob),
      createdDate: new Date(),
    }

    copyPdfHistory.push(newPdfInfo)
    setPdfHistory(copyPdfHistory)
    storageService.set(PDF_HISTORY_LIST, copyPdfHistory)
    setText('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={text}
        onChange={handleChangeText}
        name="text"
        type="text"
        className="flex-auto h-10 flex py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        disabled={!text.length}
        className={clsx(
          'py-2 px-4 h-10 bg-blue-500 text-white cursor-pointer font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
          { 'bg-gray-400 pointer-events-none': !text.length },
        )}
        onClick={handleConvert}
      >
        Конвертувати в PDF
      </button>
    </div>
  )
}

export default Header
