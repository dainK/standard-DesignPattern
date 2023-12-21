"use strict";
// StateA 클래스
class StateA {
    handle() {
        console.log('A상태');
    }
}
// StateB 클래스
class StateB {
    handle() {
        console.log('B상태');
    }
}
// Context 클래스
class Context {
    constructor(state) {
        this.state = state;
    }
    // 상태 변경 메서드
    setState(state) {
        this.state = state;
    }
    // 행동을 위임하는 메서드
    request() {
        this.state.handle();
    }
}
// 사용 예제
const context = new Context(new StateA());
// 현재 상태에서 요청 수행
context.request();
// 상태 변경
context.setState(new StateB());
// 변경된 상태에서 요청 수행
context.request();
// node ./dist/state.js
