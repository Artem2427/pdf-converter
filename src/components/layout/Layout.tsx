import Header from '../header/Header'
import PdfHistory from '../pdf-history/PdfHistory'
import PreviewPdf from '../preview-pdf/PreviewPdf'

const Layout = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 h-screen gap-4">
      <div className="col-span-1 row-span-2 bg-gray-200 p-2 flex flex-col gap-4">
        <Header />
        <PdfHistory />
      </div>
      <div className="col-span-2 row-span-2 bg-gray-300 p-2">
        <PreviewPdf />
      </div>
    </div>
  )
}

export default Layout
