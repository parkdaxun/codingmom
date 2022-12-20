import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LecturerInfo from './lecturerInfo'
import styles from "../../styles/lecturer/lecturerList.module.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  column-gap: 10em;
  row-gap: 2em;
`

export default function Index() {
    return (
        <div className={styles.lecturer}>
            <Header />
            <div className={styles.lecturerList}>
                <div className={styles.category}>
                    <div className={styles.categoryButton} >
                        <span>소프트웨어 강사</span>
                    </div>
                    <div className={styles.categoryButton} >
                        <span>레고 강사</span>
                    </div>
                    <div className={styles.categoryButton} >
                        <span>메이커 강사</span>
                    </div>
                    <div className={styles.categoryButton} >
                        <span>기타</span>
                    </div>
                </div>
                <div className={styles.flex}>
                    <Grid>
                        <Fade bottom>
                            <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                            <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                            <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                            <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                            <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                            <LecturerInfo img={"/images/lecturer.png"} name={"박춘배"} category={"소프트웨어 분야"} email={"email@gmail.com"} />
                        </Fade>
                    </Grid>
                </div>
                <Footer />
            </div>
        </div>
    )
}