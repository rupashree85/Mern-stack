class calculator{
    constructor(value){
        this.result=value;
    }
    add(n){
        this.result+=n;
        return this;
    }
    subtract(n){
        this.result-=n;
        return this
    }
    multiply(n){
        this.result*=n;
        return this
    }
    divide(n){
        this.result/=n;
        return this
    }
    get(){
        return this.result;
    }
}
let calc = new calculator(34);
console.log(calc.add(1).multiply(2).divide(7).get());
