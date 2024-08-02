"use client"
import { Header } from "./Header/page"
import Image from "next/image"
import about from "../../public/assets/about.png"
import Type from "./componentes/Type/page"
import you from "../../public/assets/portifolio.jpg"
import styles from "./page.module.scss"

export default function Home(){

  return(
    <div>
      
      <section>
     
     
       <div className={styles.board}>

         <div className={styles.type}>
             <div className={styles.text}>Eu sou Flavio Gama <br></br>Desenvolvedor Full Stack</div>
                   <Type />
            </div>

           <Image
               className={styles.image}
               src={about}
               width={350}
             height={350}
               alt="Picture of the author"
             />
       </div>
       </section>

       <section className={styles.boardSessao}>

       <div>
        <h2>Sou um apaixonado por tecnologia<br></br>
        Estudante de ciencias da tecnologia<br></br>
        Aqui estao alguns de meus projetos
        </h2>
       </div>

        <div>
       <Image
       className={styles.image}
       src={you}
       width={250}
       height={250}
       alt="minha imagem"/>

       </div>
     
      
      </section>

    
       
      
    </div>
  )
}