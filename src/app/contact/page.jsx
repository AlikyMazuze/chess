import ContactForm from "@/components/Contact-form"
import { Facebook, Instagram, Linkedin, Twitter, CornerRightDown } from 'lucide-react'
import Link from 'next/link'
function Page(){
    return (
      <div className="w-full flex-auto">
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
          {/* <img src="/perfect-transformed.png" className='absolute right-1 opacity-40 top-0 h-96 w-auto object-contain'/> */}
          <div className="w-2/3 flex flex-col justify-center h-full gap-8 ">
            <h2 className="font-bold text-xl tracking-wide text-black">Contacte-nos</h2>
            <h1 className="text-5xl font-semibold tracking-wide text-black">
              Entre Em Contacto Connosco
            </h1>
            <div className="flex gap-1">
              <p className="tracking-wide text-lg text-black">
                Sinta-se livre para fazer qualquer questão a nós 
              </p>
              <CornerRightDown className="h-8 w-8 text-black self-end"/>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
        <section className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <div className="lg:order-last" style={{opacity: 1, transform: "none"}}>
            <ContactForm />
          </div>

            <div style={{opacity: 1, transform: "none"}}>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Nossa localização
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Prefere contactar ao vivo? Temos a lista dos nossos endereços abaixo
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <li>
                  <address className="text-sm not-italic text-neutral-600">
                    <strong className="text-neutral-950">Cidade de Maputo</strong>
                    <br /> Av. Emilia Daússe
                    <br />
                    530, Maputo, Moçambique
                  </address>
                </li>

              </ul>
              <div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                  Email 
                </h2>
                <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-neutral-950">Federacao</dt>
                    <dd>
                      <a
                        className="text-neutral-600 hover:text-neutral-950"
                        href="mailto:federacao@gmail.com"
                      >
                        federacao@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-950">Press</dt>
                    <dd>
                      <a
                        className="text-neutral-600 hover:text-neutral-950"
                        href="mailto:press@gmail.com"
                      >
                        xadrez@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                  Follow us
                </h2>
                <ul role="list" className="flex gap-x-10 text-neutral-950 mt-6">
                  <li>
                    <Link
                      aria-label="Facebook"
                      className="transition hover:text-neutral-700"
                      href="https://facebook.com"
                    >
                      <Facebook className="h-6 w-6 " />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Instagram"
                      className="transition hover:text-neutral-700"
                      href="https://instagram.com"
                    >
                      <Instagram className="h-6 w-6 " />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Twitter"
                      className="transition hover:text-neutral-700"
                      href="https://x.com"
                    >
                      <Twitter className="h-6 w-6 " />
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Linkedin"
                      className="transition hover:text-neutral-700"
                      href="https://linkedin.com"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

        </section>
        </div>
        </section>

      </div>
    );
}
export default Page