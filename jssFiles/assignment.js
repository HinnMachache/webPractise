var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Leanne",
        "number": 0909090909090,
        "likes": ["Pizza","Coding","Brownie Pattie"]
    },
    {
        "firstName": "Harry",
        "lastName": "Porter",
        "number": 09876756545,
        "likes": ["Hogwarts","Magic","Hagrit"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": 089808876766,
        "likes": ["Intriguging cases", "violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["javascript","gaming","Foxes"]
    }
];

function findContact(name, property)
{
    for (var index = 0; index < contacts.length; index++) {
        if (contacts[index].firstName === name || contacts[index].lastName === name) {
            return contacts[index][property] || "No such property.";
        }
    }
      return "No Record Found."
}

var data = findContact("Vos", "likes");
console.log(data);