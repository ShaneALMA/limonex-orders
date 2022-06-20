import { useGlassOrder } from '../context/GlassOrderContext'

const Home = () => {
  const { valInput } = useGlassOrder()
  console.log(valInput)
  
  return (
    <h1>{valInput}</h1>
  )
}

export default Home