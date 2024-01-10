import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div style={{opacity: 1, transform: "none"}}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <nav>
              <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                    Eventos
                  </div>
                  <ul role="list" className="mt-4 text-sm text-neutral-700">
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="/work/family-fund"
                      >
                        Xadrez Online
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="/work/unseal"
                      >
                        Xadrez nas Escolas
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="/work/phobia"
                      >
                        Xadrez pela Pátria
                      </a>
                    </li>
                    <li className="mt-4">
                      <a className="transition hover:text-neutral-950" href="/work">
                        Ver todos <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                    Nós
                  </div>
                  <ul role="list" className="mt-4 text-sm text-neutral-700">
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="/about"
                      >
                        Acerca
                      </a>
                    </li>

                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="/contact"
                      >
                        Contacte
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                    Connecte-se
                  </div>
                  <ul role="list" className="mt-4 text-sm text-neutral-700">
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="https://facebook.com"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="https://instagram.com"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        className="transition hover:text-neutral-950"
                        href="https://twitter.com"
                      >
                        Twitter
                      </a>
                    </li>

                  </ul>
                </li>
              </ul>
            </nav>
            <div className="flex lg:justify-end">
              <form className="max-w-sm">
                <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  Inscreva-se para o newsletter
                </h2>
                <p className="mt-4 text-sm text-neutral-700">
                  Inscreva-se para receber as últimas notícias sobre os nossos eventos, projectos e campeonatos
                </p>
                <div className="relative mt-6">
                  <input
                    placeholder="Endereço Email"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                    type="email"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                    >
                      <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
            <a aria-label="Home" href="/">
              <div
                className="flex h-12 items-center"
              >
                <Image width={500} height={500} src='/logo.png' alt="logo" className='w-12'/>
                <p className="fill-neutral-950 font-bold">FMX</p>
              </div>
            </a>
            <p className="text-sm text-neutral-700">Federação Moçambicana de Xadrez. 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer