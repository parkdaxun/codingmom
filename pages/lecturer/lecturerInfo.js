import styles from '../../styles/lecturer/lecturerInfo.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function LecturerInfo({ img, name, category, email }) {
    return (
        <Link className={styles.info} href={"/lecturer/detail"}>
            <a>
                <Image src={img} alt={"icon"} width={300} height={300} />
                <p className={styles.name}>{name}</p>
                <p className={styles.category}>{category}</p>
                <p className={styles.email}>{email}</p>
            </a>
        </Link>
    )
}