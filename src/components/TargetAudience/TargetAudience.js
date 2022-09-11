import styles from "./TargetAudience.module.css"
import Group51 from '../../assets/Group51.png';
import Group52 from '../../assets/Group52.png';
import Group53 from '../../assets/Group53.png';
import BoxIdSet from '../../assets/boxIdSet.png';
import Icone from '../../assets/íconePublicoAlvo.png'

const TargetAudience = () => {
  return (
    <section className={styles.targetAudience}>
      <div className={styles.containerPublicoAlvo}>
        <img src={Icone} alt="icone publico alvo" />
      <p>PÚBLICO ALVO</p>
      </div>
      <h2>Para quem é o curso?</h2>
      <section className={styles.containerImagens}>
      <img src={BoxIdSet} alt="box IDset" className={styles.imgBox}/>
      <div className={styles.divImagensTextos}>
      <img src={Group51} alt="Group51" />
      <img src={Group52} alt="Group52" />
      <img src={Group53} alt="Group53" />
      </div>
      </section>
    </section>
  );
}

export default TargetAudience;