function fibonacci(position){
    var v1=0;
    var v2=0;
    var sum=1;
    if(position==1 || position==0){
      return position;
    }else{
      for(let i=2;i<=position;i++){
        v1=sum;
        sum+=v2;
        v2=v1;
      }
      return sum;
    }
  }