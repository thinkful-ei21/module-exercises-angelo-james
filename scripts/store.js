const store = (function(){

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = id => {
    items.find(function(item) {
      return item.id === id;
    });
  };

  const addItem = name => {
    try {
      Item.validateName(name);
      items.push(Item.create(name));
    } catch (error) {
      console.error('Cannot add name: ' + error.message);
    }
  }

  const findAndToggleChecked = id => {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  const findAndUpdateName = (id, newName) => {
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    } catch (error) {
      console.error('Cannot update name: ' + error.message);
    }
  }

  const findAndDelete = id => {
    const index = items.findIndex(function(item) {
      return item.id === id;
    });
    items.splice(index, 1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());