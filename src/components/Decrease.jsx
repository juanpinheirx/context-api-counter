import { useContext } from 'react'
import AppContext from '../context/AppContext'


export const Decrease = () => {
  const decreaseState = useContext(AppContext);
  return (
    <div>
      <button onClick={decreaseState.removes}>
        Clique para diminuir
      </button>
    </div>
  )
}
