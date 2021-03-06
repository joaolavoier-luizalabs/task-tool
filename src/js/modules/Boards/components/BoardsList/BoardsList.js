import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Board from 'modules/Boards/components/Board';
import BtnAddBoard from 'modules/Boards/components/BtnAddBoard';

import style from './BoardsList.sass';

const BoardsList = ({ boards, onBtnAddBoardClick, onFieldNameBlur, onClickName }) => (
  <div className={style['board-list']} >
    {boards.map(({ name, id, editMode }) => (
      <Board key={uid()} name={name} id={id} editMode={editMode} onFieldNameBlur={onFieldNameBlur} onClickName={onClickName} />
        ))}
    <BtnAddBoard onClick={onBtnAddBoardClick} />
  </div>
  );

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBtnAddBoardClick: PropTypes.func.isRequired,
  onFieldNameBlur: PropTypes.func.isRequired,
  onClickName: PropTypes.func.isRequired,
};

export default BoardsList;
