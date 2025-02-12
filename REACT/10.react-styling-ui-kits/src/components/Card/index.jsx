// import styles from "./index.module.css"
import styles from "./index.module.scss"

const Card = () => {
    return (
        <div className={styles.card}>
            <img src="https://picsum.photos/200/300" alt="" className={styles["card-image"]} />
            <div className={styles["card-body"]}>
                <h2 className={styles["card-title"]} >card title</h2>
                <p className={styles["info"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis laborum? Unde dolore quidem facilis.</p>
            </div>

        </div >
    )
}

export default Card


// const student = {
//     name: "nihad",
//     email: "nihad@gmail.com"
// }

// console.log(student.name);
// console.log(student["name"]);
