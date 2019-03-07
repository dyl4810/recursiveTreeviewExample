const initState = {
  treeData: [{
    id: 1,
    name: "Info",
    children: [
      {
        id: 2,
        name: "Company",
        children: [ 
          {
            id: 3,
            name: "Test1",
            children: []
          },
          {
            id: 4,
            name: "Test2",
            children: [{
              id: 21,
              name: "Test1",
              children: []
            },
            {
              id: 22,
              name: "Test2",
              children: []
            }]
          }
        ]
      },
      {
        id: 5,
        name: "Services",
        children: [
          {
            id: 6,
            name: "Test3",
            children: []
          },
          {
            id: 7,
            name: "Test4",
            children: []
          }
        ]
      },
      {
        id: 8,
        name: "Contacts",
        children: [
          {
            id: 9,
            name: "Test5",
            children: []
          },
          {
            id: 10,
            name: "Test6",
            children: []
          }
        ]
      }
    ]
  }],

  treeDepth: 0,
};
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
