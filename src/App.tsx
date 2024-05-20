import { useEffect } from 'react'

import './App.css'
import Layout from './components/layout/Layout'
import { storageService } from './services/storage-service'
import { PdfInfo, usePdfStore } from './stores/usePdfStore'
import { PDF_HISTORY_LIST } from './utils/constants'

function App() {
  const [setPdfHistory] = usePdfStore((state) => [state.setPdfHistory])

  useEffect(() => {
    const localPdfHistory = storageService.get<PdfInfo[]>(PDF_HISTORY_LIST)

    if (localPdfHistory) {
      setPdfHistory(localPdfHistory)
    }
  }, [])

  return (
    <div className="">
      <Layout />
    </div>
  )
}

export default App
