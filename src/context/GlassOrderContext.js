import { createContext, useState, useContext } from 'react'

const GlassOrderContext = createContext() 

export const useGlassOrder = () => {
  return useContext(GlassOrderContext)
}

const GlassOrderProvider = ({children}) => {
 
 const [valInput, setValInput] = useState('Clásico')
 const [showOpts, setShowOpts] = useState(false)
 
  return (
    <GlassOrderContext.Provider value={{valInput, setValInput, showOpts, setShowOpts}}>
      {children}
    </GlassOrderContext.Provider>
  )
}

export default GlassOrderProvider