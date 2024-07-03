// TODO: this function needs to be refactored
const exportDataToFile = (array, filename) => {
  const visibleItems = array.filter(item => item.isVisible)
  const visibleItemsJSON = visibleItems.map(item => ({
    text: item.text,
    taskDone: item.isLineThrough
  }))
  
  if (visibleItems.length > 0) {
    // create Blob object for data
    const blob = new Blob([JSON.stringify(visibleItemsJSON)], { type: 'application/json' })

    // create temporary anchor element in DOM to store the Blob object
    const anchor = document.createElement('a')

    // create a URL for the anchor element
    anchor.href = URL.createObjectURL(blob)

    // set the file name for the download
    anchor.download = filename

    // trigger a click event on the anchor element to start download
    anchor.click()

    // free the browser resources by removing the object URL, this is a standard clean-up procedure
    URL.revokeObjectURL(anchor.href)
  } else {
    alert('Unable to export empty list. Please add some items to your list.')
  }
}

// // onfileSelected prop is from the parent component this allows parent component to define how file is used
// const importDataFromFile = ({onFileSelected}) => {

//   // handle file change event
//   const handleFileChange = (event) => {

//     // get the file selected by the user
//     const file = event.target.files[0]

//     if (file) {
//       // create new file reader object
//       const reader = new FileReader()

//       // when the file is loaded (onload event) this event handler will read the file
//       reader.onload = (event) => {
//         // get the content of the file
//         const content = event.target.result
//         // call the onFileSelected callback with the file content
//         onFileSelected(content)
//       }
//       // read the file as text
//       reader.readAsText(file)
//     }
//   }

//   return (
//     <div>
//       {/* input element is necessary for selecting files */}
//       <input type="file" accept=".json" onChange={handleFileChange} />
//     </div>
//   )
// }

export {
  exportDataToFile, 
  // importDataFromFile
}