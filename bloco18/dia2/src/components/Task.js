import { useContext } from 'react';
import AppContext from '../context/Context';

export default function Task() {
  const { task } = useContext(AppContext);
  return (
    task && task.map((element) => <h1>{ element }</h1>)
  )
}