function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
  console.log( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
  console.log( curriedSum(1)(2)(3) ); // 6，全柯里化
   
  //写一个curry函数来实现此功能
  function curry(fn)
  {
    return function curried(...args)//使用函数原因：可以接收到新数组并且操作
    {//判断旧的数组长度和函数需要的参数长度
      if(args.length>=fn.length)
      {
        return fn.apply(this,args)//将指定的this值和一个数组（或类数组对象）作为参数传递给fn函数
        //如此处，fn是sum，所以把数组变为参数传给sum中的a,b,c;
      }
      else{
        return function(...args2)//使用函数原因：可以接收到新数组并且操作
        {//concat用于将两个或多个数组合并成一个新的数组对象并且返回新数组
          //用法：旧数组.concat（新数组）
          return curried.apply(this,args.concat(args2));
          //使用apply将数组传入函数参数中
        }
      }

    }
  }