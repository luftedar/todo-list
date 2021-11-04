const { addNewItem,removeItem } = require("../src/__mocks__/addremove")

const taskList = [
  {
    description: 'Task 1',
    completed: false,
    index: 0,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 1,
  },
]

describe('Tests for add remove', () => {
  test('Add Item', () => {
    addNewItem('New Task',false,taskList.length,taskList)
    expect(taskList.length).toBe(3);
  });
})