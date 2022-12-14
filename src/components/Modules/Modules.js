import styles from './Modules.module.css'
import Seta from '../../assets/setas.png'
import Icone from '../../assets/íconeModulo.png'

export const Modules = () => {
  return (
    <section className={styles.modules}>
      <section className={styles.containerTitle}>
        <div className={styles.containerIconeModulos}>
          <img src={Icone} alt='Ícone Módulo' />
          <p>MÓDULOS</p>
          </div>
          <h2>Conheça o que será abordado no curso</h2>
          <img className={styles.seta} src={Seta} alt='seta' />
      </section>
      <section className={styles.listaDeModulos}>
        <ul>
          <li>Módulo 1 - ALINHAMENTO DE EXPECTATIVA</li>
          <li>Módulo 2 - UNIVERSO DIGITAL</li>
          <li>Módulo 3 - O INSTAGRAM</li>
          <li>Módulo 4 - O INSTAGRAM ESTRATÉGICO</li>
          <li>Módulo 5 - PRODUÇÃO DE CONTEÚDO</li>
          <li>Módulo 6 - TRÁFEGO PAGO (BÁSICO)</li>
          <li>Módulo 7 - CONCLUSÃO, OU MELHOR, CONTINUAÇÃO</li>
        </ul>
      </section>
    </section>
  );
};

