


 

// * Sum of Multiples of 3 and 5

// * If we list all the natural numbers below 10 that are multiples of 3 or 5, 

// * we get 3, 5, 6 and 9. The sum of these multiples is 23.

// * Write a function so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//  ! Additionally, if the number is negative, return 0.

//  $ Note: If the number is a multiple of both 3 and 5, only count it once.

 

// ## Examples

 

// test(10) => 23

// test(20) => 78

// test(200) => 9168

// */

 

// function sumOfMultiples(number){
//     const multilplesArr = []
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5  === 0) {
//             multilplesArr.push(i)
//         }
//     } 
//     return multilplesArr.reduce((a, b) => a + b)

// };
// console.log(sumOfMultiples(200))


// // No need for Arr ^












/* Text Message Analyzer

You're given an array of objects representing text messages. Each message object has the following properties:

| Key       | Type   | Description                                            |

| --------- | ------ | ------------------------------------------------------ |

| id        | number | Unique identifier for the message                      |

| sender    | string | Phone number of sender                                 |

| recipient | string | phone number of the recipient                          |

| text      | string | The content of the message                             |

| timestamp | string | date and time the message was sent, in ISO 8601 format |

// Your task is to create a function called analyzeMessages that takes this array of message objects and performs the following operations:

// 1. Count the total number of messages

// 2. Identify the user (phone number) who sent the most messages

// 3. Group messages by date (ignoring time)

// 4. Calculate the average message length (in characters)

// */

// function analyzeMessages(messages) {
// //     // 1. Count the total number of messages
// //     let totalNumOfMessages = 0
// // for (let message of messages) {
// //     totalNumOfMessages++
// // }
// //   return totalNumOfMessages
//   // 2. Identify the user (phone number) who sent the most messages
//   let numbersList = []
//   for (let i = 0; i < messages.length; i++) {
//     numbersList.push(messages[i].sender)
//   }
//   return numbersList
// }
const messages = [

    {
  
      id: 1,
  
      sender: "555-0001",
  
      recipient: "555-0002",
  
      text: "Hey, how are you doing?",
  
      timestamp: "2024-03-15T09:30:00Z",
  
    },
  
    {
  
      id: 2,
  
      sender: "555-0002",
  
      recipient: "555-0001",
  
      text: "I'm good, thanks! How about you?",
  
      timestamp: "2024-03-15T09:31:00Z",
  
    },
  
    {
  
      id: 3,
  
      sender: "555-0001",
  
      recipient: "555-0002",
  
      text: "Pretty good. Did you finish the project?",
  
      timestamp: "2024-03-15T09:35:00Z",
  
    },
  
    {
  
      id: 4,
  
      sender: "555-0003",
  
      recipient: "555-0001",
  
      text: "Meeting at 2 PM today.",
  
      timestamp: "2024-03-15T10:00:00Z",
  
    },
  
  {
  
      id: 5,
  
      sender: "555-0001",
  
      recipient: "555-0003",
  
      text: "OK, I'll be there.",
  
      timestamp: "2024-03-15T10:05:00Z",
  
    },
  
    {
  
      id: 6,
  
      sender: "555-0002",
  
      recipient: "555-0001",
  
      text: "Yes, I finished the project yesterday.",
  
      timestamp: "2024-03-16T11:00:00Z",
  
    },
  
    {
  
      id: 7,
  
      sender: "555-0001",
  
      recipient: "555-0002",
  
      text: "Great job! Let's celebrate soon.",
  
      timestamp: "2024-03-16T11:30:00Z",
  
    },
  
  ];


// 1. Count the total number of messages

// 2. Identify the user (phone number) who sent the most messages

// 3. Group messages by date (ignoring time)

// 4. Calculate the average message length (in characters)

// Here are four more problems you can solve using the messages array:

// 5. Find the most active recipient
// Identify which phone number received the most messages.

// 6. Find the longest message
// Determine which message has the most characters and return its details.

// 7. Find conversations between two users
// Given two phone numbers, return all messages exchanged between them.

// 8. Get the latest message for each sender
// Find the most recent message sent by each unique sender.
  
   const messageAnalysis = messages => {
    
    // 1. Count the total number of messages
    const messagesLength = messages.length
    
    // 2. Identify the user (phone number) who sent the most messages
   const senderCount = {}
    for (let {sender} of messages) {
      senderCount[sender] = (senderCount[sender] || 0) + 1
    }
    const mostFrequentSender = Object.keys(senderCount).reduce((a, b) => senderCount[a] > senderCount[b] ? a : b)  
    
    // 3. Group messages by date (ignoring time)
    const messagesByDate = {}
    for (let {timestamp, text} of messages) {
      const date = timestamp.slice(0, 10)
      if (!messagesByDate[date]) {
        messagesByDate[date] = []
      }
    messagesByDate[date].push(text)
    } 
  
    // 4. Calculate the average message length (in characters)
  const totalCharacters = messages.reduce((sum, { text }) => sum + text.length, 0);
  const avgMessLength =  Math.round(totalCharacters / messagesLength)
  
    // 5. Find the most active recipient 
    // Identify which phone number received the most messages.
  const receiverCount = {} 
  for (let {recipient} of messages) {
    receiverCount[recipient] = (receiverCount[recipient] || 0) + 1
    
  }
  const mostActiveRecipient = Object.values(receiverCount)
  
    // Extra: If it's a tie return an Array of all of the Most active numbers

  // 6. Find the longest message
  // Determine which message has the most characters and return its details.
  const longestMessage = messages.reduce((sum, {text}) => sum + text)


  return{
        // messagesLength, 
        // mostFrequentSender, 
        // messagesByDate, 
        // avgMessLength,
        // mostActiveRecipient,
        // avgMessLength,
        totalCharacters,
        mostActiveRecipient
      }

   }
  
  console.log(messageAnalysis(messages));
    









