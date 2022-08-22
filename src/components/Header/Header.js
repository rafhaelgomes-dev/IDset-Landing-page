import styles from "./Header.module.css";
import FotoPasip1 from "./FotoPasip1.png";
import IconCurso from "./icone.png"

const Header = () => {
  return (
   <header className={styles.header}>
     <section className={styles.sectionInfo}>
         <div className={styles.containerLogoIdSet}>
         <div className={styles.containerlistRed}><div className={styles.list} />
         <p className={styles.pTreinamento}>TREINAMENTO</p>
         </div>
        <h1 className={styles.h1IdSet}>IDset</h1>
        </div>
        <div className={styles.containerCursoOnline}>
        <img src={IconCurso} alt="icone curso" className={styles.icon}/>
        <p className={styles.pCursoOnline}>CURSO ONLINE</p>
        </div>
        <h1 className={styles.h1Title}>Aprenda a potencializar seus resultados nas redes sociais</h1>
        <div className={styles.containerParagrafoEListAzul}>
          <div className={styles.listaAzul}/>
        <p className={styles.pTextoExplicativo}>IDset é o treinamento ideal para que você possa dominar de uma vez por todas o uso das redes sociais e colher bons resultados do mundo digital.</p>
        </div>
        <a href="#about" className={styles.buttonGarantir}>GARANTIR MINHA VAGA</a>
        <p className={styles.pFinal}>De <span className={styles.span}>R$ 169,00</span> por 6x de R$ 22,90 ou R$ 97,00 à vista.</p>
      </section>
        <img src={FotoPasip1} alt="foto Pasip" className={styles.imgPasip1} />
   </header>
  )
} 

export default Header;




