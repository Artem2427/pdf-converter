import { create } from 'zustand'

export type PdfInfo = {
  id: string
  url: string
  createdDate: Date
}

type PdfStore = {
  pdfHistory: PdfInfo[]
  activePdf: PdfInfo | null
  setActivePdf: (activePdf: PdfInfo | null) => void
  setPdfHistory: (pdfHistory: PdfInfo[]) => void
}

export const usePdfStore = create<PdfStore>((set) => ({
  pdfHistory: [],
  activePdf: null,
  setActivePdf: (activePdf) => {
    set({
      activePdf,
    })
  },
  setPdfHistory: (pdfHistory) => {
    set({
      pdfHistory,
    })
  },
}))
