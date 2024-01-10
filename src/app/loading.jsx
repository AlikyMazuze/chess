import King from '@/assets/KingDown.gif'
import Image from 'next/image'
function Loading() {
  return (
    <div className='w-full flex items-center justify-center flex-col animate-pulse'>
      <Image src={King} width={-1} height={-1} alt="Chess Piece"/>
      <h1>Promovendo Xeque-Mates</h1>
    </div>
  )
}

export default Loading