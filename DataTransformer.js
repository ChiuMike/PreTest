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
var order=[];
for(var i=0;i<userOrders.length;i++){
  if(userIds.includes(userOrders[i].userId)){
    var item={
      ...userOrders[i],
      name:userData[userOrders[i].userId]
    }
    order.push(item)
  }
}
var result=[];
for(var i=0;i<order.length;i++){
  var buy=[];
  if(order[i].orderIds.length>0){
    for(var j=0;j<order[i].orderIds.length;j++){
      var o={id:order[i].orderIds[j],
             name:orderData[order[i].orderIds[j]].name,
             price:orderData[order[i].orderIds[j]].price,
            }
      buy.push(o);
    }
  }
  var r={
    user:{id:order[i].userId,name:order[i].name},
    orders:buy
  }
  result.push(r);
}
console.log(result)