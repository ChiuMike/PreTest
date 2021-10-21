const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
]
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
  'T01': { name: 'A', price: 499 },
  'T02': { name: 'B', price: 599 },
  'T03': { name: 'C', price: 699 },
  'T04': { name: 'D', price: 799 },
}
const w=Object.entries(orderData);
var result=[]
userOrders.forEach((item)=>{
  var orders=[];
  if(item.orderIds.length>0){
    item.orderIds.forEach((product_id)=>{
    var n=w.find((element)=>element[0]==product_id)
    var cart={
      id:product_id,
      name:n[1].name,
      price:n[1].price,
    }
    orders.push(cart)
    })
  }
  var detail={
    user:{
      id:item.userId,
      name:userData[item.userId]
    },
    orders:orders,
  }
  result.push(detail)
})
console.log(result)