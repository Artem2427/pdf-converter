import PDFViewer from 'pdf-viewer-reactjs'

import { usePdfStore } from '../../stores/usePdfStore'

const PreviewPdf = () => {
  const [activePdf, setActivePdf] = usePdfStore((state) => [
    state.activePdf,
    state.setActivePdf,
  ])

  const handleCloseActivePdf = () => {
    setActivePdf(null)
  }

  return (
    <div
      className={`relative ${activePdf ? 'h-full' : 'flex items-center justify-center h-full'}`}
    >
      {activePdf ? (
        <>
          <button
            className="absolute top-2 right-2 cursor-pointer text-sm text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={handleCloseActivePdf}
          >
            Close
          </button>
          <div className="w-full h-full flex items-center justify-center">
            <PDFViewer
              document={{
                url: activePdf.url,
              }}
              canvasCss="w-full"
              navigation={{
                css: {
                  navBar: 'bg-gray-900 text-white',
                },
              }}
            />
          </div>
        </>
      ) : (
        <div className="text-center text-gray-700">Select a PDF file!</div>
      )}
    </div>
  )
}

export default PreviewPdf
