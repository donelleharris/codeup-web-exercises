const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

{
    let moreThan3Languages = users.filter(user => user.languages.length >= 3);
    console.log(moreThan3Languages);

    let userEmails = users.map(user => user.email);
    console.log(userEmails);

    const totalYears = users.reduce(function(output, user) {
        return (output + user.yearsOfExperience)
    }, 0);
    const averageYearsExperience = totalYears / users.length;

    console.log(totalYears);
    console.log(users.length);
    console.log(averageYearsExperience);

    const longest = userEmails.reduce((accum, curr) => curr.length > accum.length ? curr : accum, '');

    const instructors = users.reduce(function (greeting, {name}){
        return `${greeting + name}, `
    },'Your instructors are: ').slice(0, -2) + '.';
    console.log(instructors);
    // Bonus: Use .reduce to get the unique list of languages from the list of users.
    // Expected output: "clojure, javascript, java, scala, php, bash, sql, html, css"

    // Blossom's solution:
    const codeLanguages = users.reduce((acc, {languages}) => {
        languages.forEach(element => {
            acc.push(element)
        })
        return acc
    }, [])
    const unique = codeLanguages.filter((c, index) => {
        return codeLanguages.indexOf(c) === index
    })
    console.log(unique);

    //My solution:
    // const allLanguages = users.reduce(function (langList, {languages}){
    //     return `${langList + languages},`
    //     }, '').split(',').slice(0, -1)
    //
    // let uniqueLanguages = new Set(allLanguages);
    // console.log(uniqueLanguages);

}