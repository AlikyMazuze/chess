import Chess from "@/components/chessBoard"
import Card from "@/components/ui/card"

const projectos = [
  {
    image: "/chessboard.jpg",
    title: "Xadrez Nas Escolas",
    body: "Projecto Desenvolvido a prior pelo elenco do Sr.Presidente Domingos langa , que visa implementar o Xadrez nas escolas como uma disciplina Curicular"
  },
  {
    image: "/chessboard.jpg",
    title: "Xadrez Online",
    body: "A Associaçao Provincial de Xadrez de Inhambane vem , deste os tempos de covid-19 efectuando campeonatos diarios de Xadrez , Online , Na plataforma Lichess.org com direiro a primiaçao , o que tem aumentando de uma forma significativa oo nivel de Xadrez em Moçambique"
  },
  {
    image: "/chessboard.jpg",
    title: "Xadrez pela Pátria",
    body: "Um Grupo de Amigos do Xadrez Juntaram-se e formaram o movimento Xadrez pela patria , ou seja , Chess for the fatherland , com o objectivo de aumentar no nivel de Xadrez e moçambique e o rating Nacional. O evento teve a sua primeira Ediçao na Katembe , Marisol , Onde pudemos ver muitos jogadores de diversos escaloes , e de diversas Provincias , sem contar com os estrangeiros."
  }

]

function ProjectsPage() {
  return (
    <section>
      <div className="px-2">
        <div className="flex w-full gap-4">
          {projectos.map((value, key)=>{
            return <Card title={value.title} body={value.body} src={value.image} key={key}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage