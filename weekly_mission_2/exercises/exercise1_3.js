const pullRequest = {
    title: "Exercises",
    author: "Enrique Ibarra",
    branchName: "Main",
    dateCreated: "05/04/2022",
    status: "sent",
    repositoryNameAssociated: "Launch X",
    getStatus: function () {
        return this.status
    },
    getTitleAndAuthor: function () {
        return `Pull Request: ${this.title}, Author: ${this.author} ` 
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())