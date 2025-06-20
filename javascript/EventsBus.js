class eventbus{
    constructor(){
        this.topics={};
    }

    subscribe(topic, handler){
        if(!this.topics[topic]){
            this.topics[topic]=[];
        }
        this.topics[topic].push(handler);
    }
    unsubscribe(topic, handler){
        if(this.topics[topic]){
            const index = this.topics[topic].findIndex(item => item === handler)
            this.topics[topic].splice(index, 1);
        }
    }
    publish(topic, data) {
        if (this.topics[topic]) {
            this.topics[topic].forEach(handler => handler(data));
        }
    }

}
const eventBus = new eventbus();

const handler1 = (data) => {
  console.log("Handler 1 received:", data);
};

const handler2 = (data) => {
  console.log("Handler 2 received:", data);
};
eventBus.subscribe('someEvent', handler1);
eventBus.subscribe('someEvent', handler2);
eventBus.publish('someEvent', "Initial Data");
eventBus.unsubscribe('someEvent', handler2);

