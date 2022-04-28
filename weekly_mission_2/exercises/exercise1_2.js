const issue = {
    tittle: "Commits",
    repositoryNameAssociated: "Launch X",
    status: "Open",
    numberOfComments: 15,
    labels: ["JS, Node, POO"],
    author: "J. Enrique Ibarra",
    dateCreated: "18/04/2022",
    lastUpdated: "18/04/2022",
    getTitleAndAuthor: function() {
        return `Issue "${this.tittle}" was created by ${this.author}`
    },
    getGeneralInfo: function() {
        return `Issue from ${this.repositoryNameAssociated} repository, was created on ${this.dateCreated} has status: ${this.status}, ${this.numberOfComments} Comments, Labels: ${this.labels}, Last Updated: ${this.lastUpdated}`
    } 
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())