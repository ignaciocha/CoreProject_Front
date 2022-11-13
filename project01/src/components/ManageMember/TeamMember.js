import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Space, Table } from "antd";
import { useParams } from "react-router-dom";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import { Button, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const TeamMember = ({ item, idx }) => {
  const confirm = (e) => {
    console.log(e);
    message.success("탈퇴 처리하였습니다");
  };

  let { team_seq } = useParams();
  let user_id = localStorage.getItem("user_id");

  const [admin, setAdmin] = useState("");
  const [data, setData] = useState([]);
  const [targetUser, SetTargetUser] = useState("");
  const [count, SetCount] = useState(0);

  const handle = (event) => {
    console.log(event.target.value);
    SetTargetUser(event.target.value);
    console.log(targetUser);
  };

  const columns = [
    {
      title: "",
      key: "user_icon",
      dataIndex: "user_icon",
      render: (_, record) => (
        <div>
          {record.user_icon == true ? (
            <img src="record.user_icon"></img>
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          ,
        </div>
      ),
    },
    {
      title: "닉네임",
      dataIndex: "user_nick",
      key: "user_nick",
    },
    {
      title: "가입일",
      dataIndex: "tm_date",
      key: "tm_date",
      render: (_, record) => <span>{record.tm_date.substring(0, 10)}</span>,
    },
    {
      title: "호감도",
      key: "user_favor",
      dataIndex: "user_favor",
      render: (_, record) => (
        <div>
          <span>{record.user_favor}</span>
          {/* <Popconfirm
          title={record.user_favor}
          onConfirm={favorUpdate}
          okText="Yes"
          cancelText="No">
          <button value={record.user_id} onClick={handle}>💗</button>
                  </Popconfirm> */}

          <button
            value={record.user_id}
            className="teamSettingBtnStyle"
            onMouseOver={handle}
            onClick={favorUpdate}
          >
            💗
          </button>
        </div>
      ),
    },
    {
      title: " ",
      key: "confirm_yn",
      dataIndex: "confirm_yn",
      render: (_, record) => (
        <Space size="middle">
          {/* 이미 가입승인된 회원 - 탈퇴 */}
          {admin == user_id &&
          admin == record.user_id &&
          record.confirm_yn === "y" ? (
            <Popconfirm
              title="정말로 탈퇴시키시겠습니까?"
              onConfirm={deleteTm}
              okText="Yes"
              cancelText="No"
            >
              <button
                className="teamSettingBtnStyle"
                value={record.user_id}
                href="#"
                onClick={handle}
              >
                탈퇴
              </button>
            </Popconfirm>
          ) : (
            false
          )}
          {admin == user_id && record.confirm_yn === "n" ? (
            // * 가입 승인 안 된 회원 - 승인/거절 */
            <div>
              <Popconfirm
                title="정말로 승인하시겠습니까?"
                onConfirm={confirmTm}
                okText="Yes"
                cancelText="No"
              >
                <button
                  className="teamSettingBtnStyle"
                  value={record.user_id}
                  href="#"
                  onClick={handle}
                >
                  승인
                </button>
              </Popconfirm>
              <br></br>
              <Popconfirm
                title="정말로 거절하시겠습니까?"
                onConfirm={deleteTm}
                okText="Yes"
                cancelText="No"
              >
                <button
                  className="teamSettingBtnStyle"
                  value={record.user_id}
                  onClick={handle}
                >
                  거절
                </button>
              </Popconfirm>
            </div>
          ) : (
            false
          )}
        </Space>
      ),
    },
  ];

  // 가입 거절/ 탈퇴
  const deleteTm = (e) => {
    console.log(targetUser);
    let url = "/api/teammember/delete";
    axios
      .post(url, {
        applicant: targetUser,
      })
      .then((response) => {
        console.log("거절/탈퇴 성공");
        message.success("탈퇴 처리하였습니다");
        SetCount(count + 1);
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
  };

  // 가입 승인
  const confirmTm = (e) => {
    console.log(targetUser);
    let url = "/api/teammember/confirm";
    axios
      .post(url, {
        applicant: targetUser,
        team_seq: team_seq,
      })
      .then((response) => {
        console.log(targetUser);
        console.log("승인 성공");
        message.success("가입 승인하였습니다");
        SetCount(count + 1);
      })
      .catch((error) => {
        console.log(targetUser);
        console.log(error); //오류발생시 실행
      });
  };

  // 호감도 증가
  const favorUpdate = (e) => {
    console.log(targetUser);
    let url = "/api/teammember/update";
    axios
      .post(url, {
        applicant: targetUser,
      })
      .then((response) => {
        console.log("호감도 증가 성공");
        SetCount(count + 1);
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
  };

  useEffect(() => {
    const url = "/api/teamsetting/" + team_seq;
    axios
      .get(url, {})
      .then((res) => {
        console.log(res.data); //정상 통신 후 응답된 메시지 출력
        setData(res.data);
        setAdmin(res.data[0].team_admin);
      })
      .catch((error) => {
        console.log(error); //오류발생시 실행
      });
  }, [count]);

  return (
    <div>
      <div className="wrapper">
        팀원목록
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default TeamMember;
