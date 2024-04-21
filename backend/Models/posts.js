class Posts {
    constructor( userId, userName, userImg, userBio, wallet, postId, postImg, description, likes, funded, bettors) {
        (this.userId = userId),
        (this.userName = userName),
        (this.userImg = userImg),
        (this.userBio = userBio),
        (this.wallet = wallet),
        (this.postId = postId),
        (this.postImg = postImg),
        (this.description = description),
        (this.likes = likes),
        (this.funded = funded),
        (this.bettors = bettors);
    }
}

export default Posts;
