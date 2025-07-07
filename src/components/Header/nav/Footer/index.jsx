import Link from "next/link"
import styles from "./style.module.scss"

export default function index() {
  return (
    <div className={styles.footer}>
      <Link href="#">Awwwards</Link>
      <Link href="#">Instagram</Link>
      <Link href="#">Dribble</Link>
      <Link href="#">LinkedIn</Link>
    </div>
  )
}
