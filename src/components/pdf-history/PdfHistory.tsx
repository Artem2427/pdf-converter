import { PdfInfo, usePdfStore } from '../../stores/usePdfStore'
import PdfCard from '../pdf-card/PdfCard'

const PdfHistory = () => {
  const [pdfHistory, activePdf, setActivePdf] = usePdfStore((state) => [
    state.pdfHistory,
    state.activePdf,
    state.setActivePdf,
  ])

  const handleSelectPdfFile = (pdfFile: PdfInfo) => {
    setActivePdf(pdfFile)
  }

  return (
    <div className="space-y-4">
      {pdfHistory.length === 0 ? (
        <div className="text-center text-gray-500">No converted PDF files!</div>
      ) : (
        pdfHistory.map((pdf) => (
          <PdfCard
            key={pdf.id}
            pdfInfo={pdf}
            onSelect={handleSelectPdfFile}
            isActive={activePdf?.id === pdf.id}
          />
        ))
      )}
    </div>
  )
}

export default PdfHistory
