import { useEffect } from "react"

const useLocalStorage = (key, dependency) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dependency))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency])
}

export default useLocalStorage