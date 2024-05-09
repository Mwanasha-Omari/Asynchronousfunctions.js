// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should
//  log the message to the console after the specified delay time.


function delay(time) {
    let myPromise = new Promise(resolve => setTimeout(resolve, time));
    return myPromise
  }
  async function messageDelay(message, delayTime) {
    await delay(delayTime);
    console.log(`Hello your message is delayed by ${delayTime} milliseconds`);
  }
  messageDelay("Hello, world!",1000);
//  2 You have an array of user IDs and a function getUserData(id) that returns a Promise with
//    user data when given a user ID. Write an asynchronous function that fetches and 
//    logs the data for each user ID one by one, in sequence.

function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id, name: `Ali ${id}`, email: `ali${id}gmail.com` };
      resolve(userData);
    }, 1000);
  });
}
const userIds = [1, 2, 3];
async function fetchAndLogUserData(userIds) {
  for (const id of userIds) {
    try {
      const userData = await getUserData(id);
      console.log(`User Data for ID ${id}:`, userData);
    } catch (error) {
      console.error(`Failed to fetch data for ID ${id}:`, error);
    }
  }
}
fetchAndLogUserData(userIds);
// You have an asynchronous function performTask() that returns a Promise. The Promise resolves
//  if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a 
//  custom success message if the task is successful, and a custom error message if there's an error.


let task = false;
async function performTask() {
  return new Promise((resolve, reject) => {
    if(task){
      resolve('task is successful')
  }
  else{
    reject('There is an error')
}
  })
}
function performTaskSuccessful() {
  performTask()
    .then(() => {
      console.log("Task is successful");
    })
    .catch(() => {
      console.log("There's an error");
    });
}
performTaskSuccessful();

