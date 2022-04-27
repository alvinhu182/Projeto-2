import styles from './footer.module.css'
 function Footer(){
    return(
      <footer className= {`${styles.footer} text-center bg-dark text-white py-2 mt-4 `}>
        <p className='m-0 mt-4'>aprenda como é fácil jogar bem sem muita dificuldade</p>
      </footer>
    )
  }
  export default Footer
