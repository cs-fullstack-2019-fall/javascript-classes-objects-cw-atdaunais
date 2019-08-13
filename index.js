class GitHubRepository
{
    constructor(userName, fileName, descriptionOfRepository, code)
    {
        this.userName_prop = userName;
        this.fileName_prop = fileName;
        this.descriptionOfRepository_prop = descriptionOfRepository;
        this.code_prop = code;
    }
    printFunc()
        {
            console.log(this.userName_prop);
            console.log(this.fileName_prop);
            console.log(this.descriptionOfRepository_prop);
            console.log(this.code_prop);
        }
}

let myRepository = new GitHubRepository("atdaunais", "This is the file name.", "My files.", "This is the code.");
myRepository.printFunc();

class Movie
{
    constructor(movieName, rating, yearReleased)
    {
        this.movieName_prop = movieName;
        this.rating_prop = rating;
        this.yearReleased = yearReleased;
    }
    changeRating(rate)
    {
        return this.rating_prop = rate;
    }
    changeYear(year)
    {
        return this.yearReleased = year;
    }
}

let myMovie = new Movie("movie", "PG13", "2014");
console.log(myMovie.rating_prop);
console.log(myMovie.movieName_prop);
console.log(myMovie.yearReleased);

myMovie.changeRating("PG");
console.log(myMovie.rating_prop);

myMovie.changeYear("1995");
console.log(myMovie.yearReleased);