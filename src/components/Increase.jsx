import { useContext } from 'react'
import AppContext from '../context/AppContext'

export const Increase = () => {
  const increaseState = useContext(AppContext);
  return (
    <div>
      <button onClick={increaseState.adds}>
        Clique para aumentar
      </button>
    </div>
  )
}
