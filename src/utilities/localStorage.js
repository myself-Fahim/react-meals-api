

const setToStorage=(cart)=>{
      const stringCart = JSON.stringify(cart);
       localStorage.setItem('cart',stringCart);
}


const getFromStorage = () => {
     const storageString = localStorage.getItem('cart');
     if(storageString){
        const storageObj = JSON.parse(storageString)
        return storageObj;
     }
     return []
}

const addItemStorage = (cat) => {
    const storageItem = getFromStorage();
    storageItem.push(cat);
    setToStorage(storageItem)

}

export {addItemStorage,setToStorage,getFromStorage}