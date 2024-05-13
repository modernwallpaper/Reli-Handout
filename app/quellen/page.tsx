import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Quellen() {
  return(
    <main>
      <div className="flex flex-col gap-y-1">
        <div className="flex w-full justify-center items-center font-semibold">
          <p>Bilder:</p>
        </div>
        <Button asChild variant={"link"}>
          <div>
            <Link href={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ketteler%2C_Wilhelm_Emanuel.jpg/220px-Ketteler%2C_Wilhelm_Emanuel.jpg"}>Bild 1</Link>
          </div>
        </Button>
        <Button asChild variant={"link"}>
          <div>
            <Link href={"https://bistummainz.de/export/sites/bistum/kunst-gebaeude-geschichte/kirchengeschichte/.galleries/images/BDDM_14859_1850-1877_Wilhelm-Emmanuel-Freiherr-von-Ketteler.jpg_1885205982.jpg"}>Bild 2</Link>
          </div>
        </Button>
        <Button asChild variant={"link"}>
          <div>
            <Link href={"https://gw.geneanet.org/public/img/media/deposits/11/ad/3792243/medium.jpg?t=1449591104"}>Bild 3</Link>
          </div>
        </Button>
        <Button asChild variant={"link"}>
          <div>
            <Link href={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/KAB_Logo.svg/1200px-KAB_Logo.svg.png"}>Bild 4</Link>
          </div>
        </Button>
        <div className="flex w-full justify-center items-center font-semibold">
          <p>Informationen:</p>
        </div>
          <Button asChild variant={"link"}>
            <div>
              <Link href={"https://www.kab.de/startseite"}>KAB Infos 1</Link>
            </div>
          </Button>
          <Button asChild variant={"link"}>
            <div>
              <Link href={"https://de.wikipedia.org/wiki/Katholische_Arbeitnehmer-Bewegung"}>KAB Infos 2</Link>
            </div>
          </Button>
          <Button asChild variant={"link"}>
            <div>
              <Link href={"https://de.wikipedia.org/wiki/Wilhelm_Emmanuel_von_Ketteler"}>Wilhelm Infos 1</Link>
            </div>
          </Button>
          <Button asChild variant={"link"}>
            <div>
              <Link href={"https://www.regionalgeschichte.net/bibliothek/biographien/ketteler-wilhelm-emmanuel-von.html"}>Wilhelm Infos 2</Link>
            </div>
          </Button>
          <Button asChild variant={"link"}>
            <div>
              <Link href={"https://www.kab-mainz.de/kab/geschichte/bischof-wilhelm-emmanuel-freiherr-von-ketteler"}>Wilhelm Infos 3</Link>
            </div>
          </Button>
          <Button asChild variant={"outline"}>
            <div>
              <Link href={"/"}>{'<'} Handout</Link>
            </div>
          </Button>
      </div>      
    </main>
  )
}
