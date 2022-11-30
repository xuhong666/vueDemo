//导出方式1
export {name,age,flag}
//导出方式2
export var num1=1000;
//导出函数
export  {sum};

export function mul(num1,num2){
     return num1+num2;
}
//es6
export class Person{
    run(){
        console.log('在奔跑')
    }
}
const address ='北京市'
export default address
// 注意: export default  在同一个模块中，不允许存在多个

