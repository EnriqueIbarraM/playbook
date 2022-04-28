const user = {
    name: "J. Enrique II",
    username: "the2cto",
    tweets: 8484,
    bio: "Cuando no tengas nada que hacer y yo pase por tu cabeza, nadie podrá oírte así que, piensa en mí como si me quisieras",
    since: "06/2010",
    following: 473,
    followers: 141,
    getTweets: function () {
        return `Tweets: ${this.tweets}`
    },
    getGeneralInfo: function () {
        return `User name: ${this.username} \nJoined on: ${this.since} \nFollowing: ${this.following} \nFollowers: ${this.followers}`
    }
}

console.log("***** Twitter *****")
console.log(user.getTweets())
console.log(user.getGeneralInfo())
console.log(user.bio)

const trendgTopic = {
    country: "Mexico",
    first: "#Edomex",
    second: "Cádiz",
    third: "Senegal",
    fourth: "Litio",
    fifth: "Kendrick",
    getCountry: function() {
        return `Country: ${this.country}`
    },
    getTT: function () {
        return `Trendig Topics:\n1.- ${this.first} \n2.- ${this.second} \n3.- ${this.third} \n4.- ${this.fourth} \n5.- ${this.fifth}`
    }
}

console.log(trendgTopic.getCountry())
console.log(trendgTopic.getTT())