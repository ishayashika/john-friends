
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item)=>{
        if(item.profession==="developer")
            console.log(item);
    });
  }
  PrintDeveloperbyMap();
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item)=>{
        if(item.profession==="developer")
            console.log(item);
    })
  }
  PrintDeveloperbyForEach();
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee={ id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  addData();
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter((item)=>{
        if(item.profession!=="admin")
            return true;
    });
    console.log(arr);
  }
  removeAdmin();
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployees=[
                    { id: 5, name: "robin", age: "21", profession: "developer" },
                    { id: 6, name: "harry", age: "22", profession: "intern" },
                    { id: 7, name: "ron", age: "23", profession: "admin" }
                ];
    arr=arr.concat(newEmployees);
    console.log(arr);
  }
  concatenateArray();