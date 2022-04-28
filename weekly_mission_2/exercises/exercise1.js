const repo = {
    name: "LaunchX",
    author: "Juan Enrique",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 0,
    forks: 5,
    issuesOpen: 1,
    issueClose: 0,
    getTotalIssues: function(){
        return this.issuesOpen + this.issueClose
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del Repositorio: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())