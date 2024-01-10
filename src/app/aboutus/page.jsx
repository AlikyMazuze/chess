import Stat from '@/components/ui/stat'
import React from 'react'
import { Check, Users, School, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const obj = [
    {
        Numb: "Dinamismo",
        title: "Mova-se de forma energética –— encarre os problemas proactivamente e procure sempre pensar no passo a seguir.",
        icon: <Check className="h-20 w-20 text-[#b58863]"/>,
    },
    {
        Numb: "Inovaçao",
        title: "Olhe para os problemas de um ângulo diferente –— Nada é insolucionável. Crie, desenvolva e implemente soluções práticas para problemas reais.",
        icon: <School className="h-20 w-20 text-[#b58863]"/>,
    },
    {
        Numb: "Aprendizado",
        title: "Melhore 1% a cada dia –— Busque por novas habilidades, experiências, conhecimentos e ideias, de forma flexível e contínua",
        icon: <GraduationCap className="h-20 w-20 text-[#b58863]"/>
    },
    {
        Numb: "Inclusao",
        title: "Procure envolver mais gente –— busque por uma integração absoluta quando for promover o Xadrez e, na medida do possível, envolva os xadrezistas na busca pelos nossos objetivos organizacionais.",
        icon: <Check className="h-20 w-20 text-[#b58863]"/>,
    },
    {
        Numb: "Conexao",
        title: "Conecte-se –— procure conhecer a si próprio, a sua equipe e aos nossos atletas. Não obstante, procure, também, entender e incorporar nossos desafios, ideias e valores.",
        icon: <Check className="h-20 w-20 text-[#b58863]"/>,
    },
    {
        Numb: "Patriotismo",
        title: "MSeja patriótico –— dedica-te a valorização do Xadrez Moçambicano, promovendo-o, melhorando-o, e visando, sempre, o engrandecimento do país",
        icon: <Check className="h-20 w-20 text-[#b58863] "/>,
    },

]

function AboutUsPage() {
  return (
      <section className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div style={{ opacity: 1, transform: "none" }}>
              <h1>
                <span className="block font-display text-base font-semibold text-neutral-950">
                  Sobre Nós
                </span>
                <span className="sr-only"> - </span>
                <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                  Nossa força é a colaboração
                </span>
              </h1>
              <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                <p>
                O nosso negócio não é praticar o xadrez, é impactar vidas. A federação Moçambicana de Xadrez <strong>FMX</strong>, atualmente presidida por Milton Botão, foi fundada por Guimarães Lucas, visando criar um órgão que pudesse capacitar, enriquecer e melhorar vidas e comunidades através do xadrez
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                  <p>
                  Desde então, os nossos valores organizacionais continuam os mesmos. Para nós, investir numa gestão que passe pela criação e manutenção de campeões é a essência do que fazemos.
                  </p>
                  <p>
                  Acreditamos que planos consistentes geram xeques-mates consistentes ― e que a consistência no xadrez só é possível através do estudo e da prática. Por isso promover o xadrez. Por isso promover xeques-mates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
              <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
                <div
                  className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <dt className="mt-2 text-base text-neutral-600">
                    Atletas
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                    150
                  </dd>
                </div>
                <div
                  className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <dt className="mt-2 text-base text-neutral-600">
                    Associações
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                    11
                  </dd>
                </div>
                <div
                  className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <dt className="mt-2 text-base text-neutral-600">
                    Clubes e Academias
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
                    4
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl" style={{ opacity: 1, transform: "none" }}>
                <h2>
                  <span className="mb-6 block font-display text-base font-semibold text-white">
                    Visão & Missão
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-white">
                  Tornar-se referência no Xadrez Africano.
                  </span>
                </h2>
                <div className="mt-6 text-xl text-neutral-300">
                  <p>
                  Massificar e elevar o nível do Xadrez Moçambicano, mediante aplicação de estratégias que visam inovar e dinamizar os processos levados a cabo pela Federação, pelas Associações, pelos Clubes e pelo Xadrez no geral
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-white">
                        Dinamismo.
                        </strong>{" "}
                        Mova-se de forma energética. Encarre os problemas proactivamente e procure sempre pensar no passo a seguir.
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-white">Aprendizado.</strong>{" "}
                        Melhore 1% a cada dia. Busque por novas habilidades, experiências, conhecimentos e ideias, de forma flexível e contínua
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-white">
                        Patriotismo.
                        </strong>{" "}
                        Seja patriótico. Dedica-te a valorização do Xadrez Moçambicano, promovendo-o, melhorando-o, e visando, sempre, o engrandecimento do país
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="space-y-24">
              <div>
                <div
                  className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                  style={{ opacity: 1, transform: "none" }}
                ></div>
                <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                      Liderança
                    </h2>
                  </div>
                  <div className="lg:col-span-3">
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                    >
                      <li>
                        <div style={{ opacity: 1, transform: "none" }}>
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <Image
                              alt=""
                              loading="lazy"
                              width={1800}
                              height={1800}
                              decoding="async"
                              className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                              src="/miltonB.jpg"
                              style={{ color: "transparent" }}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                Milton Botão
                              </p>
                              <p className="mt-2 text-sm text-white">
                                Presidente
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                  style={{ opacity: 1, transform: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative pt-24 sm:pt-32 lg:pt-40 mt-24 sm:mt-32 lg:mt-40">
          <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            >
              <rect
                width="100%"
                height="100%"
                fill="url(#:re:)"
                strokeWidth="0"
              ></rect>
              <svg x="50%" y="-270" strokeWidth="0" className="overflow-visible">
                <path
                  transform="translate(64 160)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(128 320)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(288 480)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(512 320)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(544 640)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(320 800)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
              </svg>
              <defs>
                <pattern
                  id=":re:"
                  width="96"
                  height="480"
                  x="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(0 -270)"
                  fill="none"
                >
                  <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
                </pattern>
              </defs>
            </svg>
          </div>

        </div>

      </section>
  );
}

export default AboutUsPage