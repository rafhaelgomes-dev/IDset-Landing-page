import styles from "./TargetAudience.module.css"

const TargetAudience = () => {
  return (
    <section className={styles.targetAudience}>
      <div className={styles.containerPublicoAlvo}>
        <img src="ícone - PÚBLICO-ALVO.png" alt="icone publico alvo" />
      <p>PÚBLICO ALVO</p>
      </div>
      <h2>Para quem é o curso?</h2>
      <section className={styles.containerImagens}>
      <img src="./boxIdSet.png" alt="box IDset" />
      <div className={styles.divImagensTextos}>
      <img src="./Group51.png" alt="Group51" />
      <img src="./Group52.png" alt="Group52" />
      <img src="./Group53.png" alt="Group53" />
      </div>
      </section>
    </section>
  );
}

export default TargetAudience;