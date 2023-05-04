import Animation from "@/components/Animation"
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home({Component}) {
  
  let name = "Seungwon Cha"

  return (
    
    <div className="{inter.className}">  
      <Animation></Animation>
      <h1 className="title">쿠팡 Fresh</h1>
      <p className="title-sub"> made by {name} </p>
      
    </div>
  )
}
