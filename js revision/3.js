class Base{
    constructor()
    {
        this.eno=1;
        this.eno1=2;
    }
}

class Child extends Base{
    constructor()
    {   super()
        this.eno2=3;
        this.eno3=4;
    }
}

let obj=new Child()
console.log(obj)