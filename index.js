const greetUser = (userName) =>{
    console.log(`Hello, ${userName}`);
};

const greetwithsalutation = (salutation, userName) => {
    console.log(`Hello, ${salutation}. ${userName}`);
};

const sayHi = () => {
    console.log("Hi There!");
  };

module.exports = {
    greetUser,
    greetwithsalutation,
    sayHi,
};