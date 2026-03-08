const DiagramBox = (props) => (
  <div
    class={`absolute border-[1.5px] border-black bg-white flex flex-col justify-center items-center text-center p-4 shadow-sm ${props.class || ''}`}
    style={{ left: `${props.x}px`, top: `${props.y}px`, width: `${props.w}px`, height: `${props.h}px` }}
  >
    {props.children}
  </div>
);

const PhaseLabel = (props) => (
  <div
    class="absolute flex justify-center items-center rounded-[8px] border-2 border-teal-600 bg-teal-50"
    style={{ left: '15px', top: `${props.y}px`, width: '70px', height: `${props.h}px` }}
  >
    <span
      style={{ "writing-mode": 'vertical-rl', transform: 'rotate(180deg)' }}
      class="font-bold text-teal-900 tracking-wider text-lg"
    >
      {props.text}
    </span>
  </div>
);

export default function Diagram(props) {
  return (
    <div 
      id="prisma-diagram"
      class="relative bg-white print:shadow-none print:border-none" 
      style={{ "min-width": '800px', "min-height": '1000px' }}
    >
      <svg class="absolute inset-0 pointer-events-none z-0" width="800" height="1000">
        <defs>
          <marker id="arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
          </marker>
        </defs>

        <path d="M 390 105 L 450 105" stroke="black" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)" />
        <path d="M 250 160 L 250 250" stroke="black" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)" />
        
        <path d="M 390 305 L 450 305" stroke="black" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)" />
        <path d="M 250 360 L 250 450" stroke="black" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)" />
        
        <path d="M 390 510 L 440 510" stroke="black" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)" />
        <path d="M 250 570 L 250 700" stroke="black" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)" />
      </svg>

      <PhaseLabel y={10} h={180} text="Identifikasi" />
      <PhaseLabel y={210} h={180} text="Penyaringan" />
      <PhaseLabel y={410} h={180} text="Kelayakan" />
      <PhaseLabel y={660} h={180} text="Inklusi" />

      <DiagramBox x={110} y={50} w={280} h={110}>
        <p class="font-semibold mb-1">Artikel diidentifikasi melalui<br/>pencarian database</p>
        <p class="text-sm font-normal">(n = {props.data.dbSearch})</p>
      </DiagramBox>
      <DiagramBox x={450} y={50} w={280} h={110}>
        <p class="font-semibold mb-1">Artikel dihapus sebelum penyaringan:</p>
        <p class="text-sm font-normal">Catatan duplikat dihapus</p>
        <p class="text-sm font-normal mt-1">(n = {props.data.duplicates})</p>
      </DiagramBox>

      <DiagramBox x={110} y={250} w={280} h={110}>
        <p class="font-semibold mb-1">Artikel disaring berdasarkan<br/>judul dan abstrak</p>
        <p class="text-sm font-normal">(n = {props.data.screened})</p>
      </DiagramBox>
      <DiagramBox x={450} y={250} w={280} h={110}>
        <p class="font-semibold mb-1">Artikel dieksklusi</p>
        <p class="text-sm font-normal">(n = {props.data.excludedScreening})</p>
      </DiagramBox>

      <DiagramBox x={110} y={450} w={280} h={120}>
        <p class="font-semibold mb-1">Artikel teks penuh dinilai<br/>kelayakannya</p>
        <p class="text-sm font-normal">(n = {props.data.assessed})</p>
      </DiagramBox>
      <DiagramBox x={440} y={420} w={320} h={180} class="!items-start !text-left !px-5">
        <div class="w-full border-b border-gray-300 pb-2 mb-3">
          <p class="font-semibold">Artikel teks penuh dieksklusi</p>
          <p class="font-normal text-sm mt-1">(n = {props.data.excludedEligibility})</p>
        </div>
        <ul class="list-disc pl-4 w-full text-xs space-y-1.5">
          <li>{props.data.reason1Text} <span class="font-normal">(n = {props.data.reason1Count})</span></li>
          <li>{props.data.reason2Text} <span class="font-normal">(n = {props.data.reason2Count})</span></li>
        </ul>
      </DiagramBox>

      <DiagramBox x={110} y={700} w={280} h={110}>
        <p class="font-semibold mb-1">Artikel inti yang disertakan<br/>dalam sintesis SLR</p>
        <p class="text-sm font-normal">(n = {props.data.included})</p>
      </DiagramBox>

      <div class="absolute bottom-10 right-10 text-xs text-gray-500 italic text-right">
        *Diagram Alir PRISMA 2020<br/>Modifikasi khusus untuk penelitian Systematic Literature Review
      </div>
    </div>
  );
}
