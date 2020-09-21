let getDateLastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events/public`
    return fetch(url, {headers: {'Authorization': `${GITHUB_API_TOKEN}`}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === 'PushEvent'))
        .then(pushEvents =>
            console.log(pushEvents[0].created_at));

}

getDateLastCommit('donelleharris')


const wait = (ms) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve("Hello World");
        }, ms);
    })
}

wait(3000).then((data) => console.log(`You'll see this after 3 seconds... "${data}"`));
wait(1000).then(() => console.log(`You'll see this after 1 second`));
let random = Math.floor(Math.random()*5000);
wait(random).then(() => console.log(`You'll see this after ${random / 1000} seconds!`))