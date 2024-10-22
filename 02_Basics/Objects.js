// Singleton - When we declare as literals singleton is "NOT" created
// Object.create


// If made using constructor it will always be "Singleton"
// Object Literals 

const Jsuser = {
    name : "Hitesh",
    email : "lakshyagarg@goaccelerix.com",
    age : "21",
    IsLoggedIn : false,
    location : "ghaziabad"

}

console.log(Jsuser.email)
console.log(Jsuser[email]) // This will not print untl the email var is defined as string
