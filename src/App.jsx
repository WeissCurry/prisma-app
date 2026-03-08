import { createSignal } from 'solid-js';
import { toPng } from 'html-to-image';
import Sidebar from './components/Sidebar';
import Diagram from './components/Diagram';

export default function App() {
  const [data, setData] = createSignal({
    dbSearch: 1565,
    duplicates: 400,
    screened: 1165,
    excludedScreening: 1000,
    assessed: 165,
    excludedEligibility: 154,
    reason1Text: 'Tidak fokus pada integrasi TOGAF/Syariah/Risiko',
    reason1Count: 100,
    reason2Text: 'Bukan peer-reviewed / tanpa kerangka empiris',
    reason2Count: 54,
    included: 11,
  });

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isGenerating, setIsGenerating] = createSignal(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: (name.includes('Count') || name.includes('Search') || ['duplicates', 'screened', 'excludedScreening', 'assessed', 'excludedEligibility', 'included'].includes(name)) ? Number(value) : value,
    }));
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const handleDownloadPNG = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('prisma-diagram');
      if (element) {
        const dataUrl = await toPng(element, {
          cacheBust: true,
          backgroundColor: '#ffffff',
          pixelRatio: 2
        });
        const link = document.createElement('a');
        link.download = 'Diagram_PRISMA.png';
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error("Gagal menggenerate PNG", error);
      alert("Terjadi kesalahan saat membuat PNG.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div class="flex h-screen w-full bg-gray-100 font-sans overflow-hidden">
      <Sidebar 
        data={data()} 
        handleChange={handleChange} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        isGenerating={isGenerating} 
        handlePrintPDF={handlePrintPDF} 
        handleDownloadPNG={handleDownloadPNG} 
      />
      
      <div 
        class="flex-1 overflow-auto bg-white flex justify-center py-10 print:py-0 print:overflow-visible"
        onClick={() => setIsMenuOpen(false)}
      >
        <Diagram data={data()} />
      </div>
    </div>
  );
}