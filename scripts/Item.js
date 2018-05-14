/* global cuid */
// eslint-disable-next-line no-unused-vars

const Item = (function(){
  const validateName = name => {
    if (!name) throw new Error('Name does not exist');
  }

  const create = name => {
    return {
      id: cuid(),
      name: name,
      checked: false
    }
  }
  
  return  {
    validateName, create
  };
}());