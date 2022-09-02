import styles from './Investment.module.css'
import logo from '../../assets/LogoIDset.svg'
import Line from '../../assets/Line.svg'
import logoInvest from '../../assets/logoInvest.svg'

export const Investment = () => {
  return (
    <div className={styles.InvestimentContainer} id='Investment'>
      <img className={styles.logoInvest} src={ logoInvest } alt='Logo Investimento' />
      <h1>Quanto você precisará investir?</h1>
      <div className={styles.tabelas}>
      <div className={styles.tabela1}>
        <img className={styles.imgLogo} src={ logo } alt='Logo IDset' />
        <img className={styles.imgLine} src={ Line } alt='Line' />
        <p className={styles.p1}>de <span>R$ 169,00</span></p>
        <p className={styles.p2}>por apenas</p>
        <h1>R$ 97,00</h1>
        <p>ou até 6x de R$ 22,90</p>
        <a href="#Investment" className={styles.buttonGarantir}>GARANTIR MINHA VAGA</a>
      </div>
      <div className={styles.tabela1}>
        <h2>O que o curso oferece?</h2>
        <p>Não é apenas um curso qualquer, é um treinamento diferente de tudo o que você já viu!</p>
        <ul>
          <li>Acesso vitalício</li>
          <li>Bônus exclusivo</li>
          <li>Linguagem de fácil entendimento</li>
          <li>+2h de conteúdo gravado</li>
          <li>Certificado de conclusão</li>
        </ul>
      </div>
      </div>
    </div>
  )
}