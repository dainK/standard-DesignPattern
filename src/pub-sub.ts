
class EventBus {
  private subscribers: { [key: string]: Function[] } = {};

  subscribe(eventType: string, callback: Function) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(callback);
  }

  publish(eventType: string, data?: any) {
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
eventBus.subscribe(EventType.USER_CREATED, (data: { username: any; }) => {
  console.log(`User created: ${data.username}`);
});

// 구독자2
eventBus.subscribe(EventType.MESSAGE_RECEIVED, (data: { message: any; }) => {
  console.log(`구독자2 Message received: ${data.message}`);
});

// 구독자3
eventBus.subscribe(EventType.MESSAGE_RECEIVED, (data: { message: any; }) => {
  console.log(`구독자3 Message received: ${data.message}`);
});

// 이벤트 발행
eventBus.publish(EventType.USER_CREATED, { username: 'name' });
eventBus.publish(EventType.MESSAGE_RECEIVED, { message: 'message' });

// node ./dist/pub-sub.js