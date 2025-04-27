// async function loadData(){
const data=await fetch("https://admin.refabry.com/api/all/product/get")
// const result=await data.json()
// console.log(result.data.data);
// return await result.data
// return result

  .then((data) => {
    return data.json();
  })
  .then((data) => {
    return data.data;
  })
  .then((data) => {
    return data.data;
  });
// }
// const data=await loadData();
// console.log(data);

export default data;
