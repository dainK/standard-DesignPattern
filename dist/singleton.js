"use strict";
class Singleton {
    // private 생성자로 외부에서의 인스턴스 생성을 막음
    constructor() { }
    // 정적 메서드를 통해 인스턴스에 접근
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    // 다른 메서드들...
    doSomething() {
        console.log('Doing something...');
    }
}
Singleton.instance = null;
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true, 동일한 인스턴스
instance1.doSomething(); // Doing something...
instance2.doSomething(); // Doing something...
// node ./dist/singleton.js
