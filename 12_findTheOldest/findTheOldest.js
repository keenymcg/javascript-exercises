function findTheOldest(people) {
    let nameOfOldest = ""
    let oldest = 0
    const stillAlive = new Date().getFullYear();
    //console.log(people.length);

    for (let i = 0; i < people.length; i++) {
        //console.log(people).name;
        if (!people[i].yearOfDeath) {
            people[i].yearOfDeath = stillAlive
        }

        let yearsAlive = (people[i].yearOfDeath - people[i].yearOfBirth);
        console.log(yearsAlive);

        if (yearsAlive > oldest) {
            oldest = yearsAlive;
            nameOfOldest = people[i].name
        };
    };
    return nameOfOldest;
};


// Do not edit below this line
module.exports = findTheOldest;
