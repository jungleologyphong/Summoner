import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LanguageSelector} from '~modules/setting';
import UserEntity from '~modules/user/entity';
import userPresenter from '~modules/user/presenter';

export const AuthLogic = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(LanguageSelector);

  return {dispatch, language};
};
