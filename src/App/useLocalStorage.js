import React from "react"

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName)
  
  let parsedItem
  
  if (localStorageItems) {
    parsedItem = JSON.parse(localStorageItems)
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export { useLocalStorage };