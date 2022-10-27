import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import logo from "../assets/img/gameus_logo_width.svg";
import '../styles/Join.css'


function Join() {
  const formSchema = yup.object({
    email: yup
      .string()
      .required('이메일을 입력해주세요')
      .email('이메일 형식이 아닙니다.'),
    password: yup
      .string()
      .required('영문, 숫자포함 8자리를 입력해주세요.')
      .min(9, '최소 9자 이상 가능합니다')
      .max(15, '최대 15자 까지만 가능합니다')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        '영문 숫자포함 8자리를 입력해주세요.'
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => console.log(data);

 



  return (
    <div className="JoinPage">
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="JoinTitleWrap">
     <img className="JoinLogo" src={logo}></img>
    <br/>
    </div>
          <div className="JoinInputTitle">이메일</div>
        <div className="JoinInputWrap">
          <input className="JoinInput" placeholder="이메일" {...register('email')} />
        </div>
        <div className="JoinErrorMessageWrap">
        {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="JoinInputTitle">비밀번호</div>
        <div className="JoinInputWrap">
        <input
          type="password"
          className="JoinInput"
          placeholder="비밀번호"
          {...register('password')}
        />
        </div>
        <div className="JoinErrorMessageWrap">
        {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="JoinInputTitle">비밀번호 확인</div>
        <div className="JoinInputWrap">
          <input
          type="password"
          className="JoinInput"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm')}
        />
        </div>
        <div className="JoinErrorMessageWrap">
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        </div>
        <div className="JoinInputTitle">닉네임</div>
        <div className="JoinInputWrap">
        <input
         type="text"
         className="JoinInput"
         placeholder="닉네임 확인"
         {...register('nicknameConfirm')}
         />
         </div>
         <div>
              <div className="JoinInputTitle"> 생년월일과 성별 </div>
              <input placeholder="931015" className="birthBox"
              type='text' maxLength='6' name='signup_birthday'
              {...register('dateConfirm')}/> -  
              <input placeholder="1" className="sexBox"
              type='text' maxLength='1' name='signup_sex'
              {...register('sexConfirm')}/> ******
            </div>
        <div>
          <button className="JoinButton" type="submit" disabled={errors || watch()}>가입하기</button>
        </div>
    </form>
    </div>
  );
}

export default Join