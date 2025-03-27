import { createContext, useContext, useState } from "react"
 
 
const initialState = {
  basket: [],
  setBasket: () => [],
  deleteProduct: () => null,
  setProductCount: () => null
}
 
const BasketProviderContext = createContext(initialState)
 
export function BasketProvider({
  children,
  ...props
}) {

  
  const [basket, setBasket] = useState(
    () => (JSON.parse(localStorage.getItem('basket'))) || []
  )
  
 
  const value = {
    basket,
    setBasket: (item) => {
      if(basket.filter((i)=>item.id == i.id).length>0){
        setBasket([...basket.map((i)=> {
          if(i.id == item.id){
            return {...i, count:i.count+1 }
          }else{
            return i
          }
        })])
        localStorage.setItem('basket',JSON.stringify([...basket.map((i)=> {
          if(i.id == item.id){
            return {...i, count:i.count+1 }
          }else{
            return i
          }
        })]))
      }else{
        setBasket([...basket,{...item,count:1}])
        localStorage.setItem('basket',JSON.stringify([...basket,{...item,count:1}]))
      }
     
    },
    deleteProduct:(id) => {
      setBasket([...basket.filter((i)=> {
        return id !== i.id
      })])
      localStorage.setItem('basket',JSON.stringify([...basket.filter((i)=> {
        return id !== i.id
      })]))
    },
    setProductCount:(id,count) => {
      setBasket([...basket.map((i)=> {
        if(i.id == id){
          return {...i, count:count }
        }else{
          return i
        }
      })])
      localStorage.setItem('basket',JSON.stringify([...basket.map((i)=> {
        if(i.id == id){
          return {...i, count:count }
        }else{
          return i
        }
      })]))
    }
  }
 
  return (
    <BasketProviderContext.Provider {...props} value={value}>
      {children}
    </BasketProviderContext.Provider>
  )
}
 
export const useBasket = () => {
  const context = useContext(BasketProviderContext)
 
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
 
  return context
}