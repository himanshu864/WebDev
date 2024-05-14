const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post.title);
        });
    }, 1000);
}
// getPosts();

// Callback example --->
/*
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post 3', body: 'This is post three' }, getPosts);
*/

// Same thing using Promise --->
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let err = false;

            if (!err) {
                resolve();
            }
            else {
                reject("ERROR: Something went wrong!");
            }
        }, 2000);
    });
}
/*

createPost({ title: 'Post 3', body: 'This is post three' })
    .then(getPosts)
    .catch(e => {
        console.log(e);
    });
*/

// Better with Async --->
async function init() {
    await createPost({ title: 'Post 3', body: 'This is post three' });
    console.log("Third post have been pushed!");
    getPosts();
}
init();