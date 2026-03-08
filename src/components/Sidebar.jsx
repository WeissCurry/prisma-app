import { Printer, ChevronDown, FileText, Image as ImageIcon } from 'lucide-solid';

export default function Sidebar(props) {
  return (
    <div class="w-96 bg-white border-r border-gray-300 flex flex-col h-full print:hidden shadow-lg z-10">
      <div class="p-5 border-b border-gray-200 bg-teal-700 text-white flex justify-between items-center overflow-visible">
        <h1 class="text-xl font-bold">PRISMA SLR</h1>
        
        <div class="relative">
          <button
            onClick={() => props.setIsMenuOpen(!props.isMenuOpen())}
            disabled={props.isGenerating()}
            class="flex items-center gap-2 bg-white text-teal-800 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-teal-50 transition-colors shadow-sm disabled:opacity-70"
          >
            <Printer size={16} /> {props.isGenerating() ? 'Memproses...' : 'Export'} <ChevronDown size={14} />
          </button>

          {props.isMenuOpen() && !props.isGenerating() && (
            <div class="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-xl border border-gray-200 z-50 overflow-hidden text-gray-800">
              <button
                onClick={() => { props.setIsMenuOpen(false); props.handlePrintPDF(); }}
                class="flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-teal-50 border-b border-gray-100 transition-colors"
              >
                <FileText size={16} class="text-teal-600" /> PDF / Cetak
              </button>
              <button
                onClick={() => { props.setIsMenuOpen(false); props.handleDownloadPNG(); }}
                class="flex items-center gap-3 w-full text-left px-4 py-3 text-sm hover:bg-teal-50 transition-colors"
              >
                <ImageIcon size={16} class="text-teal-600" /> Simpan PNG
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div class="p-5 overflow-y-auto flex-1 space-y-6" onClick={() => props.setIsMenuOpen(false)}>
        <p class="text-sm text-gray-600 mb-2">
          Formulir ini sudah diisi dengan data awal skripsi Anda. Diagram di sebelah kanan akan otomatis ter-update.
        </p>

        <div class="space-y-3">
          <h2 class="font-bold text-teal-800 border-b pb-1">1. Identifikasi</h2>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Diidentifikasi via Database</label>
            <input type="number" name="dbSearch" value={props.data.dbSearch} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Dihapus karena Duplikat</label>
            <input type="number" name="duplicates" value={props.data.duplicates} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="font-bold text-teal-800 border-b pb-1">2. Penyaringan (Screening)</h2>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Artikel Disaring</label>
            <input type="number" name="screened" value={props.data.screened} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Artikel Dieksklusi</label>
            <input type="number" name="excludedScreening" value={props.data.excludedScreening} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
        </div>

        <div class="space-y-3">
          <h2 class="font-bold text-teal-800 border-b pb-1">3. Kelayakan (Eligibility)</h2>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Teks Penuh Dinilai</label>
            <input type="number" name="assessed" value={props.data.assessed} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Total Teks Penuh Dieksklusi</label>
            <input type="number" name="excludedEligibility" value={props.data.excludedEligibility} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
          
          <div class="pl-4 border-l-2 border-gray-200 ml-2 space-y-2">
            <div>
              <label class="block text-[10px] font-semibold text-gray-500 uppercase">Alasan 1</label>
              <input type="text" name="reason1Text" value={props.data.reason1Text} onInput={props.handleChange} class="block w-full rounded-md border-gray-300 shadow-sm border p-1.5 text-xs mb-1 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
              <input type="number" name="reason1Count" value={props.data.reason1Count} onInput={props.handleChange} class="block w-24 rounded-md border-gray-300 shadow-sm border p-1.5 text-xs focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
            </div>
            <div>
              <label class="block text-[10px] font-semibold text-gray-500 uppercase">Alasan 2</label>
              <input type="text" name="reason2Text" value={props.data.reason2Text} onInput={props.handleChange} class="block w-full rounded-md border-gray-300 shadow-sm border p-1.5 text-xs mb-1 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
              <input type="number" name="reason2Count" value={props.data.reason2Count} onInput={props.handleChange} class="block w-24 rounded-md border-gray-300 shadow-sm border p-1.5 text-xs focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
            </div>
          </div>
        </div>

        <div class="space-y-3 pb-8">
          <h2 class="font-bold text-teal-800 border-b pb-1">4. Inklusi (Included)</h2>
          <div>
            <label class="block text-xs font-semibold text-gray-700">Artikel Inti (Sintesis Akhir)</label>
            <input type="number" name="included" value={props.data.included} onInput={props.handleChange} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
