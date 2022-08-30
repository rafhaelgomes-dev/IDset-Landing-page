import styles from './AboutTheCourse.module.css'
import Icone from '../../assets/íconeSobre.png'

export const AboutTheCourse = () => {
  return (
    <div className={styles.AboutTheCourse}>
      <section className={styles.infos}>
      <section className={styles.infoSobre}>
        <img src={Icone} alt="icone" />
        <p className={styles.pSobre}>SOBRE O CURSO</p>
      </section>
      <h1 className={styles.h1}>O que é o treinamento IDset?</h1>
      <p className={styles.p1}>IDset é o curso que você precisa para conhecer sobre o universo digital. o intuito é apresentar técnicas sobre instagram, produção de conteúdo e tudo que há por trás dos códigos.</p>
      <p className={styles.p1}>O jogo é muito maior do que aparenta ser e nosso objetivo é mostrar que as redes sociais e o mundo digital exigem que o online e o offline se complementem para que o processo seja humanizado e o resultado gratificante.</p>
      </section>
    </div>
  );
}