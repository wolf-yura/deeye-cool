import { all } from 'redux-saga/effects';
import { saga as auth } from './auth';
import { saga as cometchat } from './cometchat';
import { saga as comments } from './comments';
import { saga as posts } from './posts';
import { saga as profiles } from './profiles';
import { saga as alert } from './alert';
import { saga as follow } from './follow';

export default function* rootSaga() {
  yield all([auth(), posts(), profiles(), comments(), cometchat(), alert(), follow()])
}
