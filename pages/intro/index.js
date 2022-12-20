import styles from '../../styles/Intro/introduction.module.css';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Fade from 'react-reveal/Fade'
export default function Index(){
    return (
      <div className={styles.content}>
        <Header />
        <div className={styles.container}>
          <h1 className={styles.title}>코딩맘스쿨협동조합</h1>
          <h3 className={styles.info}>
            우리아이 미래 맞춤 교육
            <br />
            코딩맘들과 함께
          </h3>
          <Fade bottom>
            <img
              src={"/images/image33.png"}
              alt={"icon"}
              className={styles.mainImg}
            />
            <h1 className={styles.titled}>코딩맘</h1>
            <div className={styles.justline}></div>
            <img
              src={"/images/image34.png"}
              alt={"icons"}
              className={styles.subImg}
            />
            <br></br>
            <img
              src={"/images/bar.png"}
              alt={"bar"}
              className={styles.barImg}
            />
            <div className={styles.divyear1}>
              <h2 className={styles.year1}>2017년</h2>
              <p className={styles.year1p}>
                코딩맘스쿨협동조합 설립
                <br />
                <br />
                찾아가는 SW놀이터 사업 수행(한국과학창의재단)
                <br />
                <br />
                부산 로봇&소프트웨어 페스티벌 부스 운영
              </p>
            </div>
            <div className={styles.divyear2}>
              <h2 className={styles.year2}>2018년</h2>
              <p className={styles.year2p}>
                부산정보산업진흥원 청소년 ICT메이커 체험교실 위탁 운영
                <br />
                <br />
                The배움 SW놀이방 사업 공동수행(한국과학창의재단)
                <br />
                <br />
                부산대학교 2018 PNU 글로컬 해커톤대회 운영
              </p>
            </div>
            <div className={styles.divyear3}>
              <h2 className={styles.year3}>2019년</h2>
              <p className={styles.year3p}>
                부산대학교 산학협력 R&D 프로젝트 진행
                <br />
                <br />
                부산어린이회관 로봇과 놀자 소프트웨어 놀이 체험전 운영
                <br />
                <br />
                메이커스페이스 일반랩 주관기관선정, 잼스랩 운영
                <br />
                <br />
                부산대SW교육센터와 연계한 부산지역 중등 자유학기제 진행
              </p>
            </div>
            <div className={styles.divyear4}>
              <h2 className={styles.year4}>2020년</h2>
              <p className={styles.year4p}>
                부산동래, 남부교육지원청 찾아가는 SW&메이커 프로그램
                <br />
                <br />
                자유학기제, SW&메이커 체험캠프(부곡초, 두실초, 장서초)
                <br />
                <br />
                부산 남부창의마루 레고플레이원 프로그램 운영
              </p>
            </div>
            <div className={styles.divyear5}>
              <h2 className={styles.year5}>2021년</h2>
              <p className={styles.year5p}>
                부산동래, 남부교육지원청 찾아가는 SW&메이커 프로그램
              </p>
            </div>
            <h1 className={styles.sns}>SNS</h1>
            <div className={styles.justline2}></div>
            <div className={styles.divblog}>
              <img
                src={"/images/Blog.png"}
                alt={"icon"}
                className={styles.blog}
              />
              <h1 className={styles.gonaver}>네이버 블로그 바로가기</h1>
            </div>
            <div className={styles.facebook}>
              <img
                src={"/images/Facebook.png"}
                alt={"icon"}
                className={styles.face}
              />
              <h1 className={styles.h1face}>페이스북 바로가기</h1>
            </div>
            <div className={styles.divinsta}>
              <img
                src={"/images/Instagram.png"}
                alt={"icon"}
                className={styles.insta}
              />
              <h1 className={styles.h1insta}>인스타그램 바로가기</h1>
            </div>
          </Fade>
          <Footer />
        </div>
      </div>
    );
}