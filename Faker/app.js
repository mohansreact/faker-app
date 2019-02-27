var faker = require("faker");

var rname = faker.name.findName();
var remail = faker.internet.email();

console.log(rname);
console.log(remail);
console.log("===============");
for(var i=0; i<10; i++) {
console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}