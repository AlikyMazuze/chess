import { Tilt_Neon } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Content from '@/components/content'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer'

const tilt = Tilt_Neon({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'FMX',
  description: 'Bem-vindo ao Mundo do Xadrez em Moçambique: Explore o fascinante universo das peças e tabuleiros conosco! A Federação Moçambicana de Xadrez é o ponto de encontro para os amantes desse jogo estratégico em solo moçambicano. Aqui, mergulhe nas notícias dos torneios, descubra os grandes mestres locais e conecte-se à comunidade apaixonada pelo xadrez em Moçambique. Xeque-mate na curiosidade, tá dentro?',
  keywords: ['Xadrez', 'Federação', 'Moçambique', 'Xeque-Mate'],
  authors: [{ name: 'Dário' }, { name: 'PortfolioMz'}],
  creator: 'Dário Mazuze',
  publisher: 'PortfolioMz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={cn(tilt.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Content>
              {children}
              <ContactUs/>
              <Footer/>
            </Content>
            </ThemeProvider>
          </body>
    </html>
  )
}


function ContactUs(){
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 rounded-xl">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div
            className="-mx-6 rounded-3xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12"
            style={{opacity: 1, transform: "none"}}
          >
            <div className="mx-auto max-w-4xl">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                  Contacte-nos
                </h2>
                <div className="mt-6 flex">
                  <a
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                    href="/contact"
                  >
                    <span className="relative top-px">Diga Olá</span>
                  </a>
                </div>
                <div className="mt-10 border-t border-white/10 pt-10">
                  <h3 className="font-display text-base font-semibold text-white">
                    Localização
                  </h3>
                  <ul
                    role="list"
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                  >
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Cidade de Maputo</strong>
                        <br />Av. Emilia Daússe
                        <br />
                        530, Maputo, Moçambique
                      </address>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}