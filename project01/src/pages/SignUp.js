import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import dayjs from 'dayjs'


const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    username: Yup.string()
      .min(2, "닉네임은 최소 2글자 이상입니다!")
      .max(10, "닉네임은 최대 10글자입니다!")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"
      )
      .required("닉네임을 입력하세요!"),
    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .required("패스워드를 입력하세요!")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
      ),
      password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
      .required("필수 입력 값입니다!"),
      
    
  });
  const submit = async (values) => {
    const {email, username, password, age, gender} = values;
    try {
      await axios.post("/api/signup", {

        email: email,
        username: username,
        password: password,
        age: age,
        gender: gender,
        joindate: dayjs().format('YYYY-MM-DD HH:MM')
      });
      toast.success(<h3>회원가입이 완료되었습니다.<br/>추가정보를 입력하세요😸</h3>, {
        position: "top-center",
        autoClose: 2000
      });
      setTimeout(()=> {
        navigate("/Edit");
      }, 2000);

    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + "😭", {
        position: "top-center",
      });
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        password2: "",
        age:"",
        gender:""
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({values, handleSubmit, handleChange, errors}) => (
        <div className="signup-wrapper">
          <ToastContainer/>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">
              <div className="input-forms-item">
                <div className="input-label">이메일</div>
                <TextField
                  value={values.email}
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.email}
                </div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">닉네임</div>
                <TextField
                  value={values.username}
                  name="username"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.username}
                </div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">비밀번호</div>
                <TextField
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.password}
                </div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">비밀번호 확인</div>
                <TextField
                  value={values.password2}
                  name="password2"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.password2}
                </div>
             
              </div>
                
              <div className="input-forms-item">
                <div className="input-label">연령대</div>
                <div
                  value={values.age}
                  name="age"
                onChange={handleChange}>
                        10대<input type='radio' name='age' value='10'/>
                        20대<input type='radio' name='age' value='20'/>
                        30대<input type='radio' name='age' value='30'/>
                        40대<input type='radio' name='age' value='40'/>
                        50대<input type='radio' name='age' value='50'/>
                        비공개<input type='radio' name='age' value='N'/>
                </div>
              
             
              </div>

              <div className="input-forms-item">
                <div className="input-label">성별</div>
                
                <div
                value={values.gender}
                name="gender"
                onChange={handleChange}>
                    남자<input type='radio' name='gender' value='M'/>
                    여자<input type='radio' name='gender' value='W'/>
                    비공개<input type='radio' name='gender' value='N'/>
              </div>
                <div className="error-message">
                  {errors.gender}
                </div>
              </div>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;