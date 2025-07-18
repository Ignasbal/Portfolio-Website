import styles from "./styles.module.css";
import Characters from "../Characters/Characters";

const Main = ({characters}) => {
  return ( <main className={styles.main}>
<div>
    {characters.map((c) => {
          return <Characters key={c.id} title={c.name} imgUrl={c.image} />;
        })}
        
</div>




  </main>

    );
};

export default Main;