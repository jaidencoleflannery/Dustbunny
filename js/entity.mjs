export default class Entity{
    constructor(name, hunger, love, age){
        this.name = name;
        this.hunger = hunger;
        this.love = love;
        this.age = age;
    }
    get info() {
        console.log(JSON.stringify(this.name + this.hunger + this.love + this.age));
        return JSON.stringify(this.name + this.hunger + this.love + this.age);
      }
}