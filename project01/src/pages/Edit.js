import React, { useState } from 'react'
import '../styles/Edit.css'
import ValEdit from '../components/Edit/ValEdit';
import LoaEdit from '../components/Edit/LoaEdit';
import LolEdit from '../components/Edit/LolEdit';
import OverEdit from '../components/Edit/OverEdit';

const Edit = ({userG, setUserG}) => {

    // const [lolEdit, setLolEdit] = useState(false);
    // const [loaEdit, setLoaEdit] = useState(false);
    // const [overEdit, setOverEdit] = useState(false);
    // const [valEdit, setValEdit] = useState(false);

    // const onChangeLol = () => {
    //     setLolEdit(!lolEdit)
    //     setLoaEdit(false)
    //     setOverEdit(false)
    //     setValEdit(false)
    // };

    // const onChangeVal = () => {
    //     setValEdit(!valEdit)
    //     setOverEdit(false)
    //     setLolEdit(false)
    //     setLoaEdit(false)
    // };

    // const onChangeOver = () => {
    //     setOverEdit(!overEdit)
    //     setLolEdit(false)
    //     setLoaEdit(false)
    //     setValEdit(false)
    // };

    // const onChangeLoa = () => {
    //     setLoaEdit(!loaEdit)
    //     setLolEdit(false)
    //     setOverEdit(false)
    //     setValEdit(false)
    // };

    const userSelG = (e) => {
        console.log(e.target.value)
        if(e.target.checked === true){
            setUserG([...userG, e.target.value])
          }else if(e.target.checked === false){
            userG.splice(userG.indexOf(e.target.value), 1)
            setUserG([...userG])
          }
        }
        console.log(userG)

    return (
        <div>
            <ul>
                <li>리그오브레전드</li>
                <li>
                탑 <input type='checkbox' name='game' value='11' onClick={userSelG}/>
                정글 <input type='checkbox' name='game' value='12' onClick={userSelG}/>
                미드 <input type='checkbox' name='game' value='13' onClick={userSelG}/>
                바텀 <input type='checkbox' name='game' value='14' onClick={userSelG}/>
                서포터 <input type='checkbox' name='game' value='15' onClick={userSelG}/>
                </li>
                <li>
                언랭크<input type='checkbox' name='game' value='1' onClick={userSelG}/>
                아이언<input type='checkbox' name='game' value='2' onClick={userSelG}/>
                브론즈<input type='checkbox' name='game' value='3' onClick={userSelG}/>
                실버<input type='checkbox' name='game' value='4' onClick={userSelG}/>
                골드<input type='checkbox' name='game' value='5' onClick={userSelG}/>
                플래티넘<input type='checkbox' name='game' value='6' onClick={userSelG}/>
                다이아몬드<input type='checkbox' name='game' value='7' onClick={userSelG}/>
                마스터<input type='checkbox' name='game' value='8' onClick={userSelG}/>
                그랜드마스터<input type='checkbox' name='game' value='9' onClick={userSelG}/>
                챌린저<input type='checkbox' name='game' value='10' onClick={userSelG}/>
                </li>
            </ul>
            <ul>
                <li>오버워치2</li>
                <li>
                돌격<input type='checkbox' name='game' value='44' onClick={userSelG}/>
                공격<input type='checkbox' name='game' value='45' onClick={userSelG}/>
                지원<input type='checkbox' name='game' value='46' onClick={userSelG}/>
                </li>
                <li>
                브론즈<input type='checkbox' name='game' value='37' onClick={userSelG}/>
                실버<input type='checkbox' name='game' value='38' onClick={userSelG}/>
                골드<input type='checkbox' name='game' value='39' onClick={userSelG}/>
                플래티넘<input type='checkbox' name='game' value='40' onClick={userSelG}/>
                다이아몬드<input type='checkbox' name='game' value='41' onClick={userSelG}/>
                마스터<input type='checkbox' name='game' value='42' onClick={userSelG}/>
                그랜드마스터<input type='checkbox' name='game' value='43' onClick={userSelG}/>
                </li>
            </ul>
            <ul>
                <li>발로란트</li>
                <li>
                타격대<input type='checkbox' name='game' value='25' onClick={userSelG}/>
                척후대<input type='checkbox' name='game' value='26' onClick={userSelG}/>
                감시자<input type='checkbox' name='game' value='27' onClick={userSelG}/>
                전략가<input type='checkbox' name='game' value='28' onClick={userSelG}/>
                </li>
                <li>
                아이언<input type='checkbox' name='game' value='16' onClick={userSelG}/>
                브론즈<input type='checkbox' name='game' value='17' onClick={userSelG}/>
                실버<input type='checkbox' name='game' value='18' onClick={userSelG}/>
                골드<input type='checkbox' name='game' value='19' onClick={userSelG}/>
                플래티넘<input type='checkbox' name='game' value='20' onClick={userSelG}/>
                다이아몬드<input type='checkbox' name='game' value='21' onClick={userSelG}/>
                초월자<input type='checkbox' name='game' value='22' onClick={userSelG}/>
                불멸<input type='checkbox' name='game' value='23' onClick={userSelG}/>
                래디언트<input type='checkbox' name='game' value='24' onClick={userSelG}/>
                </li>
            </ul>
            <ul>
                <li>로스트아크</li>
                <li>
                딜러<input type='checkbox' name='game' value='35' onClick={userSelG}/>
                서포터<input type='checkbox' name='game' value='36' onClick={userSelG}/>
                </li>
                <li>
                발탄<input type='checkbox' name='game' value='29' onClick={userSelG}/>
                비아키스<input type='checkbox' name='game' value='30' onClick={userSelG}/>
                쿠크세이튼<input type='checkbox' name='game' value='31' onClick={userSelG}/>
                아브렐슈드<input type='checkbox' name='game' value='32' onClick={userSelG}/>
                일리아칸<input type='checkbox' name='game' value='33' onClick={userSelG}/>
                카양겔<input type='checkbox' name='game' value='34' onClick={userSelG}/>
                </li>
            </ul>
        </div>

        // <form>
        //     <div className="editPage">
        //         <div>
        //             <button type="button" className="lolEdit" name='lol' onClick={onChangeLol}>롤
        //             <button type="button" className="loaEdit" name='loa' onClick={onChangeLoa}>로스트아크
        //             <button type="button" className="overEdit" name='over' onClick={onChangeOver}>오버워치2
        //             <button type="button" className="valEdit" name='val' onClick={onChangeVal}>발로란트
        //         </div>
        //         <div>
        //             {lolEdit && <LolEdit />}
        //             {loaEdit && <LoaEdit />}
        //             {valEdit && <ValEdit />}
        //             {overEdit && <OverEdit />}
        //         </div>
        //     </div>
        // </form>
    );
};

export default Edit

