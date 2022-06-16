let user = "sahil";
//console.log(user);

let hero = {
    title : "Ironman",
    firstName : "Tony",
    firstName : "Stark",
    city : "New York"
};

// common js = module.exports (export this as other object)
// module.exports.hero = hero;
// module.exports.user = user; 

//---exporting two objects in more shortcut way 
// module.exports = {
//     hero : hero,
//     user : user
// }

//--- exporting two objects shortest way
module.exports = { hero, user }
