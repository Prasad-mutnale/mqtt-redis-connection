import express from 'express';
export const app = express();
app.use(express.json());

import { Redis } from 'ioredis';

export const redisclient = new Redis({
    host: 'redis-16665.c264.ap-south-1-1.ec2.cloud.redislabs.com',
    port: 16665,
    password: 'yl8Qu5X803ZzG7FS0sonaoipa6mBGbGL' 
})

export const getredisConnect= ()=>{
    redisclient.ping().then((response) => {
      console.log('Redis server is connected:', response === 'PONG');
    }).catch((error) => {
      console.error('Error connecting to Redis server:', error);
    });
}  

getredisConnect();



import mqtt,{MqttProtocol} from 'mqtt'
let mqtt_broker_url: string = 'mqtt://meta4home.in' || '';
let mqtt_protocol:string = 'mqtt' || '';
let mqtt_username:string = 'Abhiyantrik' || '';
let mqtt_password:string = '96@itsAbhiyantrik'  || '';
let mqtt_port:string = '1883'|| '';

export var mqttClient:any

if(mqtt_broker_url == ''){
console.log("No broker url specified")
}else {
    mqttClient = mqtt.connect(mqtt_broker_url,  
        {
            protocol: mqtt_protocol as MqttProtocol,
            username:mqtt_username,
            password: mqtt_password,
            port: parseInt(mqtt_port)
        });

}

export const getmqttConnect = ()=>{
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
});

mqttClient.on('error', (error:any) => {
  console.error('MQTT connection error:', error);
});

}

getmqttConnect();




const port = process.env.PORT || 3007
app.listen(port,()=>{
    console.log("Server is running on " +port);
})