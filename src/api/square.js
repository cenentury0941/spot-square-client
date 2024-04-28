function getItems(setItems){
    fetch('http://localhost:3900/items')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(items => {
      setItems(items)
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

function searchItems(setItems, searchQuery){
    fetch(`http://localhost:3900/searchItems?searchQuery=${searchQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(items => {
      setItems(items);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

export {getItems, searchItems}