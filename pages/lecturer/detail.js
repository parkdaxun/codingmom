import Image from "next/image";
import React, { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import DetailModal from './detailModal'
import styles from "../../styles/lecturer/detail.module.css"
import styled from "styled-components"; 
import classNames from "classnames";
import Modal from 'react-modal';
import { useRecoilValue } from "recoil";
import { kakaoUserInfo } from "../../util/user";
import { instance } from "../../util/axiosSetting";

export default function Detail() {
    const [value, setValue] = useState(new Date());
    const [active, setActive] = useState({
        attendance: false,
        leaveWork: false,
        attTime: "",
        leaTime: ""
    })
    const [modal, setModal] = useState(false);
    const [modify, setModify] = useState(false);
    const user = useRecoilValue(kakaoUserInfo);

    const getNowTime = () => {
        let now = new Date().getHours().toString().padStart(2, "0") + ":" + new Date().getMinutes().toString().padStart(2, "0");
        const cal = new Date().getHours() + new Date().getMinutes();
        if(cal >= 0 && cal <= 70){
            now = "AM\t" + now;
        }
        else{
            now = "PM\t" + now;
        }
        return now;
    }

    const getDate = () => {
        const now = new Date()

        const newDate = (now.toLocaleString()).replaceAll(" ", "");
        const day = newDate.substring(0, 10).replaceAll(".", "-");
        const hour = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString() + ":" + now.getSeconds().toString()

        const re = day + " " + hour;
        return re;
    }

    const workTimeFunc = (num, date) => {
        let newDate;
        if(num === 1){
            if(active.attendance){
                newDate = {
                    ...active,
                    attendance: false,
                    attTime: ""
                }
            }
            else{
                newDate = {
                    ...active,
                    attendance: true,
                    attTime: date,
                }
            }
        }
        else if(num === 2){
            if(active.leaveWork){
                newDate = {
                    ...active,
                    leaveWork: false,
                    leaTime: ""
                }
            }
            else{
                newDate = {
                    ...active,
                    leaveWork: true,
                    leaTime: now,
                }
            }
        }
        setActive(newDate);
    }

    const goOrLeaveWork = (num) => {
        const data = new FormData();
        const now = getDate();
        const getNow = getNowTime();
        
        if(num === 1) data.append("go_work", now);
        else data.append("leave_work", now);

        const url = num === 1 ? "/update/gowork" : "/update/leavework";

        instance.put(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res)=>{
            workTimeFunc(num, getNow);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
      <div className={styles.detail}>
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          style={customStyle}
        >
          <DetailModal />
        </Modal>
        <Header />
        <div className={styles.blue}>
          <div className={styles.center}>
            <span className={classNames(styles.img)}>
              <Image
                src="/images/lecturer.png"
                alt=""
                width={700}
                height={500}
                className={styles.img}
                layout={"fixed"}
              />
            </span>
            {user.type === "1" && (
              <div className={styles.flex}>
                <Work
                  active={active.attendance}
                  onClick={() => goOrLeaveWork(1)}
                >
                  <Text active={active.attendance}>출근</Text>
                  <Text2>{active.attTime}</Text2>
                </Work>
                <Work
                  active={active.leaveWork}
                  onClick={() => goOrLeaveWork(2)}
                >
                  <Text active={active.leaveWork}>퇴근</Text>
                  <Text2>{active.leaTime}</Text2>
                </Work>
              </div>
            )}
          </div>
          {modify ? (
            <div className={styles.info}>
              <input type="search" value="박춘배" name="name" />
              <input type="search" value="소프트웨어 분야" name="category" />
              <ModifyDiv>
                <input type="search" value="email@gmail.com" name="email" />
                <button onClick={() => setModify(false)}>수정완료</button>
              </ModifyDiv>
            </div>
          ) : (
            <div className={styles.info}>
              <p className={styles.bold}>박춘배</p>
              <p>소프트웨어 분야</p>
              <ModifyDiv>
                <p>email@gmail.com</p>
                <button onClick={() => setModify(true)}>정보수정</button>
              </ModifyDiv>
            </div>
          )}
          <CalendarContainer>
            <Calendar
              onChange={(value) => {
                setValue(value);
                if (user.type === "1") {
                  setModal(true);
                }
              }}
              value={value}
            ></Calendar>
          </CalendarContainer>
          <Footer />
        </div>
      </div>
    );
}

const ModifyDiv = styled.div`
    p, input{
        font-size: 20px;
    }
    input{
        width: 300px;
        height: 40px;
        margin-top: 5px;
        padding: 5px;
    }
    display: flex;
    position: relative;
    button{
        position: absolute;
        right: 0;
    }
`

const CalendarContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    .react-calendar{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 900px;
        height: 500px;
        border: none;
        margin: 50px 0 100px 0;
    }
    .react-calendar__navigation__label > span{
        font-weight: 500;
        font-size: 40px;
        line-height: 17px;
        text-align: center;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active{
        border-radius: 50%;
        background-color: #1294F2;
        color: white;
    }
    .react-calendar__tile{
        height: 60px;
        width: 70px;
        margin-top: 20px;
        abbr{
            font-size: 20px;
        }
    }
    .react-calendar__month-view__days,
    .react-calendar__month-view__weekdays,
    .react-calendar__navigation{
        width: 700px;
    }
    .react-calendar__month-view__days{
      display: grid !important;
      margin-left: 15px;
      grid-template-columns: repeat(7, 1fr);
    }
    .react-calendar__month-view__weekdays__weekday{
        abbr{
            font-size: 20px;
            text-decoration: none;
        }
    }
    .react-calendar__navigation__arrow{
        border-radius: 50%;
    }
    .react-calendar__navigation__label:hover{
        background: none !important;
        
    }
    .react-calendar__navigation__label__labelText{
        padding: 5px 50px 5px 50px;
        border-radius: 20px;
    }
    .react-calendar__navigation__label__labelText:hover{
        background-color:#e6e6e6;
    }
    .react-calendar__tile--now{
        border-radius: 50%;
    }
`
const Work = styled.div`
    width: 340px;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${({ active }) => active ? "#FFA41D" : "#C8C8C8" };
    border-radius: 15px;
    margin: 20px 50px 0 50px;
`

const Text = styled.span`
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 39px;
    margin: 0 40px 0 25px;
    color: ${({ active }) => active ? "white" : "black" };
`

const Text2 = styled.span`
    width: 220px;
    height: 45px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

const customStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: "2",
    },
    content: {
        width: "600px",
        height: "600px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
    },
}