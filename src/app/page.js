// import { ModeToggle } from '@/components/dark-mode-toggler'
// import Header from '@/components/header'

import Chess from "@/components/chessBoard";
import Stat from "@/components/ui/stat";
import { Check, Users, School, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import kingVsking from '@/assets/kingVsKing.gif'
import Link from 'next/link'
import AutoPlayVideo from "@/components/Video";


const campeonatos = [
  {
    image: "/provincial.jpg",
    title: "Campeonatos Provinciais",
    body: "Desenvolvidos anualmente pelas Associaçoes Provinciais Filiadas a federação moçambicana de Xadrez, com direito a apuramento para Campeonatos Regionais"
  },
  {
    image: "/regional.jpg",
    title: "Campeonatos Regionais",
    body: "Realizados Anualmente pela FMX , Nas Tres Regioes do Pais , Sul , Centro e Norte , onde os 2 melhores Classificados de cada escalao , passam para o Nacional"
  },
  {
    image: "/Nacional.jpg",
    title: "Campeonatos Nacionais",
    body: "Realizados pela fmx , anualmente , O Maior Evento de Xadrez a nivel Nacional onde os melhores do Pais se encontram."
  },
  {
    image: "/open.jpg",
    title: "Open's De Xadrez",
    body: "Eventos Internacionais Organizadospela FMX , em parceria com diversas marcas onde temos a participaçao de atletas estrangeiros."
  },
  {
    image: "/DSC_0775.jpg",
    title: "Aulas de Xadrez",
    body: "Nas nossas Instalaçoes citas na AV Emilia Dausse 530, Maputo, Moçambique"
  },
  {
    image: "/DSC_1141.jpg",
    title: "Formaçao de Professores",
    body: "Formamos Professores de Xadrez com direito a Certificados"
  },
]

export default function Home() {
  return (
    <>
      <section className="w-full md:h-[70vh] max-md:h-[90vh] h-fit relative lg:px-4 md:px-20 px-3">
        <Image
          width={-1}
          height={-1}
          src={kingVsking}
          className="absolute right-1 opacity-40 top-0 h-96 w-auto object-contain sepia"
        />
        <div className="md:w-2/3 flex flex-col justify-end h-full gap-4 w-full max-md:h-4/5">
          <h1 className="lg:text-5xl font-semibold tracking-wide text-4xl text-black">
            JUNTA-TE A FMX E GARANTA <br /> QUE O PRÓXIMO XEQUE-MATE <br /> SEJA
            O SEU
          </h1>
          <p className="tracking-wide text-lg text-black">
            PROMOVEMOS E REGULAMENTAMOS O XADREZ MOÇAMBICANO, DE XEQUE-MATE A
            XEQUE-MATE, VISANDO A CRIAÇÃO E A MANUTENÇÃO DE FUTUROS CAMPEÕES.
          </p>
        </div>
      </section>
      <section className="h-screen w-full flex items-center max-md:h-fit">
        <div className="h-fit w-full bg-secondary rounded-[5rem] lg:px-20 flex flex-nowrap py-5 justify-center items-center max-md:flex-col">
          <div className="w-1/2 lg:w-fit h-full py-5 flex flex-col justify-center gap-1 max-md:w-full">
            <h2 className="text-5xl break-words text-white uppercase max-md:text-center">
              Promovendo <br />
              Xeque-Mates
            </h2>
            <p className="text-zinc-400 max-md:text-center">
              Visando a criação de futuros campeões
            </p>
            <div className="flex gap-8 flex-wrap mt-2 max-md:justify-center animate-in slide-in-from-bottom-4">
              <Stat
                Icon={<Check className="h-8 w-8 text-[#b58863]" />}
                Numb={21}
                Title="Núcleos"
                isDark
              />
              <Stat
                Icon={<School className="h-8 w-8 text-[#b58863]" />}
                Numb={11}
                Title="Associações Provínciais"
                isDark
              />
              <Stat
                Icon={<GraduationCap className="h-8 w-8 text-[#b58863]" />}
                Numb={5}
                Title="Clubes E Academias"
                isDark
              />
              <Stat
                Icon={<Users className="h-8 w-8 text-[#b58863]" />}
                Numb={350}
                Title="Xadrezistas E Agentes Desportivos"
                isDark
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-end max-md:w-full max-md:justify-center">
            <Chess />
          </div>
        </div>
      </section>

      <section className="animate-in fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div
              className="max-w-2xl animate-in"
              style={{ opacity: 1, transform: "none" }}
            >
              <h2>
                <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                  Xeque-Mate nas Competições
                </span>
              </h2>
              <div className="mt-6 text-xl text-neutral-600">
                <p>
                  Acreditamos que cada movimento nas partidas de xadrez molda o
                  cenário do jogo. É o desafio e a vitória, uma dança
                  estratégica no tabuleiro da competição. Cada partida é uma
                  narrativa única, construindo um legado de xeques-mates e
                  conquistas
                </p>
              </div>
            </div>
          </div>
        </div>
        <CampeonatosContainer />
      </section>

      <section className="lg:px-4 md:px-20 px-3">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
          <div class="max-w-2xl" style={{opacity: 1, transform: "none"}}>
            <h2>
              <span class="mb-6 block font-display text-base font-semibold text-neutral-950">
                Projectos
              </span>
              <span class="sr-only"> - </span>
              <span class="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, eaque.
              </span>
            </h2>
            <div class="mt-6 text-xl text-neutral-600">
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla, dolor commodi voluptatibus quasi quas optio hic consequuntur, asperiores accusantium numquam, quidem maiores? Libero, numquam accusamus minima reprehenderit eveniet assumenda in dolore voluptate, sit dolor consequatur harum quae molestiae, pariatur alias quam beatae earum! Mollitia, omnis! Illum dolore quaerat officiis.
              </p>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="lg:flex lg:items-center lg:justify-end">
              <div class="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                <div
                  class="w-[33.75rem] flex-none lg:w-[45rem]"
                  style={{opacity: 1, transform: "none"}}
                >
                  <div class="justify-center lg:justify-end relative flex aspect-[719/680] w-full">
                    <AutoPlayVideo/>
                  </div>
                </div>
              </div>
              <div>
                <ul
                  role="list"
                  class="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4"
                >
                  <li class="group mt-10 first:mt-0">
                    <div style={{opacity: 1, transform: "none"}}>
                      <div class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong class="font-semibold text-neutral-950">
                          Xadrez Nas Escolas.{" "}
                        </strong>
                        Projecto Desenvolvido a prior pelo elenco do Sr.Presidente Domingos langa , que visa implementar o Xadrez nas escolas como uma disciplina Curicular
                      </div>
                    </div>
                  </li>
                  <li class="group mt-10 first:mt-0">
                    <div style={{opacity: 1, transform: "none"}}>
                      <div class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong class="font-semibold text-neutral-950">
                          Xadrez Online.{" "}
                        </strong>
                        A Associaçao Provincial de Xadrez de Inhambane vem , deste os tempos de covid-19 efectuando campeonatos diarios de Xadrez , Online , Na plataforma Lichess.org com direiro a primiaçao , o que tem aumentando de uma forma significativa oo nivel de Xadrez em Moçambique
                      </div>
                    </div>
                  </li>
                  <li class="group mt-10 first:mt-0">
                    <div style={{opacity: 1, transform: "none"}}>
                      <div class="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <strong class="font-semibold text-neutral-950">
                        Xadrez Pela Patria.{" "}
                        </strong>
                        Um Grupo de Amigos do Xadrez Juntaram-se e formaram o movimento Xadrez pela patria , ou seja , Chess for the fatherland , com o objectivo de aumentar no nivel de Xadrez e moçambique e o rating Nacional. O evento teve a sua primeira Ediçao na Katembe , Marisol , Onde pudemos ver muitos jogadores de diversos escaloes , e de diversas Provincias , sem contar com os estrangeiros.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


function CampeonatosContainer() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {campeonatos.map((value, key)=>{
              return (
                <div className="flex" style={{opacity: 1, transform: "none"}} key={key}>
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                    <Link href="#">
                      <span className="absolute inset-0 rounded-3xl">

                      </span>
                      <img
                        alt="FamilyFund"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        className="h-16 w-16"
                        src={value.image}
                        style={{color: "transparent"}}
                      />
                    </Link>
                  </h3>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <time datetime="2023" className="font-semibold">
                      2023
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Campeonatos</span>
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {value.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {value.body}
                  </p>
                </article>
              </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
}


