const sortItems = (array) => {
  return array.sort((a, b) => {      
    return a.isLineThrough && !b.isLineThrough
      ? 1
      : -1
  })
}

export default sortItems