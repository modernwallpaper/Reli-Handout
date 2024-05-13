import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <main className="bg-sky-100 w-full h-full flex items-center justify-center">
      <div className="w-auto h-auto bg-white p-4 rounded-md border drop-shadow-md">
        <ScrollArea>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold">Reli Handout - Wilhelm Emmanuel von Ketteler</h1>
          </div>
          <br/>
          <p>
            <div className="font-bold">
              Inhaltsbereich:
            </div>
            <br/>
            1. Ein kleiner Steckbrief
            <br/>
            2. Sein allgemeiner Lebenslauf
            <br/>
            3. Die Katholische Arbeitnehmerbewegung(KAB)
            <br/>
            4. Seine Errungenschaften Förerungen und Prägungen
          </p>
          <br/>
          <div>
            <p>
              <div className="font-bold">
                Begriffe, Definitionen:
              </div>
              <br/>
              <div className="font-semibold">
                Westfälisch:            
              </div>
              Westfalen, die Westfalen betreffen; aus Westfalen stammend
              <br/>
              <div className="font-semibold">
                Theologe:            
              </div>
              männliche Pers., die Theologie studiert[hat] und auf diesem Gebiet beruflich, wissenschaftlich, tätig ist.
              <br/>
              <div className="font-semibold">
                Sozialpolitisch:            
              </div>
              Maßnahme zur Verbesserung der wirtschaftlichen und sozialen Situation insbesondere benachteiligter gesellschaftlicher Gruppen. 
            </p> 
          </div>
          <br/>
          <div>
            <p>
              <div className="font-bold">Fazit</div>
              <br />
              <div>
                Wilhelm Emmanuel von Ketteler war eine Person, die im 19. Jahrundert gelebt hat und für die heutige Katholische Arbeitnehmerbewegung(KAB) verantwortlich ist.
                Sie setzt sich für Gesetzesänderungen und bessere Arbeitsbedingungen ein.
              </div>
            </p>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
