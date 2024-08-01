"use client"
import { Header } from "./Header/page"
import Image from "next/image"
import about from "../../public/assets/about.png"
import Type from "./componentes/Type/page"

export default function Home(){
  return(
    <div>
      <Header/>
       <h1>Portifolio</h1>
       <div className="board">
       <Image
       className="logo"
         src={about}
         width={250}
         height={250}
         alt="Picture of the author"
       />
       <Type/>

       </div>
    </div>
  )
}