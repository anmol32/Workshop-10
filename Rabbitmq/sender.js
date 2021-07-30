const amqp= require('amqplib/callback_api');
// connection with rabbitmq
amqp.connect('amqp://localhost',(err,connection)=>{
    if(err){
        throw err;
    }

    connection.createChannel((err, channel)=>{
        if(err){
            throw err;
        }
        let queueName="Rabbit";
        let message="Anmol sending the information";
        channel.assertQueue(queueName,{
            durable:false
        });
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(`Message: ${message}`);
        setTimeout(() => {
            connection.close();
        },1000)
    })
    
})