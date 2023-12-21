"use strict";
class EventBus {
    constructor() {
        this.subscribers = {};
    }
    subscribe(eventType, callback) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(callback);
    }
    publish(eventType, data) {
        if (this.subscribers[eventType]) {
            this.subscribers[eventType].forEach(callback => {
                callback(data);
            });
        }
    }
}
// 예제를 위한 이벤트 타입 정의
const EventType = {
    USER_CREATED: 'user_created',
    MESSAGE_RECEIVED: 'message_received'
};
// 사용 예제
const eventBus = new EventBus();
// 구독자1
eventBus.subscribe(EventType.USER_CREATED, (data) => {
    console.log(`User created: ${data.username}`);
});
// 구독자2
eventBus.subscribe(EventType.MESSAGE_RECEIVED, (data) => {
    console.log(`구독자2 Message received: ${data.message}`);
});
// 구독자3
eventBus.subscribe(EventType.MESSAGE_RECEIVED, (data) => {
    console.log(`구독자3 Message received: ${data.message}`);
});
// 이벤트 발행
eventBus.publish(EventType.USER_CREATED, { username: 'name' });
eventBus.publish(EventType.MESSAGE_RECEIVED, { message: 'message' });
// node ./dist/pub-sub.js
