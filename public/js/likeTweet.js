window.addEventListener('DOMContentLoaded', () => {
    likeTweet();
})

function likeTweet() {
    const allHearts = document.querySelectorAll('.fa-heart');
    const tweetsContainer = document.querySelector('.tweets-list-container');

    allHearts.forEach(element => {
        element.addEventListener('click', (event) => {
            const tweetId = event.target.getAttribute('tweetid')
            axios.get(`/tweet/like/${tweetId}`)
                .then(response => {
                    tweetsContainer.innerHTML = "";
                    tweetsContainer.innerHTML = response.data;
                    likeTweet()
                })
        })
    })
}