const MongoClient = require('mongodb').MongoClient;
const { v4: uuidv4 } = require('uuid');
const uri = "mongodb://127.0.0.1:27017/furryfeetdesigns";

async function generateMessageData() {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();

    const users = await client.db("furryfeetdesigns").collection("users").find().toArray();
    
    const messageSeeds = [];

    const subjects = ["Question about product", "Feedback", "Return request", "Order inquiry"];
    const contents = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", "Nullam ac metus ac urna hendrerit iaculis.", "Sed at justo nec diam accumsan hendrerit."];

    for (let i = 1; i <= 30; i++) {
        const user = users[Math.floor(Math.random() * users.length)];

        const subject = subjects[Math.floor(Math.random() * subjects.length)];
        const content = contents[Math.floor(Math.random() * contents.length)];
        const date = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split("T")[0];

        const message = {
            _id: uuidv4(),
            user: user._id,
            subject,
            content,
            date
        };

        messageSeeds.push(message);
    }

    await client.db("furryfeetdesigns").collection("messages").insertMany(messageSeeds);
    
    await client.close();
}

generateMessageData();