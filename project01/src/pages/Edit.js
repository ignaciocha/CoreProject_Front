import React, { useState } from 'react';
import '../styles/Edit.css';
import ValEdit from '../components/Edit/ValEdit';
import LoaEdit from '../components/Edit/LoaEdit';
import LolEdit from '../components/Edit/LolEdit';
import OverEdit from '../components/Edit/OverEdit';

const Edit = () => {
  const [lolEdit, setLolEdit] = useState(false);
  const [loaEdit, setLoaEdit] = useState(false);
  const [overEdit, setOverEdit] = useState(false);
  const [valEdit, setValEdit] = useState(false);

  const onChangeLol = () => {
    setLolEdit(!lolEdit);
    setLoaEdit(false);
    setOverEdit(false);
    setValEdit(false);
  };

  const onChangeVal = () => {
    setValEdit(!valEdit);
    setOverEdit(false);
    setLolEdit(false);
    setLoaEdit(false);
  };

  const onChangeOver = () => {
    setOverEdit(!overEdit);
    setLolEdit(false);
    setLoaEdit(false);
    setValEdit(false);
  };

  const onChangeLoa = () => {
    setLoaEdit(!loaEdit);
    setLolEdit(false);
    setOverEdit(false);
    setValEdit(false);
  };

  return (
    <form>
      <div className="editPage">
        <div>
          <button
            type="button"
            className="lolEdit"
            name="lol"
            onClick={onChangeLol}
          >
            롤
          </button>
          <button
            type="button"
            className="loaEdit"
            name="loa"
            onClick={onChangeLoa}
          >
            로스트아크
          </button>
          <button
            type="button"
            className="overEdit"
            name="over"
            onClick={onChangeOver}
          >
            오버워치2
          </button>
          <button
            type="button"
            className="valEdit"
            name="val"
            onClick={onChangeVal}
          >
            발로란트
          </button>
        </div>
        <div>
          {lolEdit && <LolEdit />}
          {loaEdit && <LoaEdit />}
          {valEdit && <ValEdit />}
          {overEdit && <OverEdit />}
        </div>
        <div>
          <button className="EditButton" type="submit">
            완료
          </button>
        </div>
      </div>
    </form>
  );
};

export default Edit;
