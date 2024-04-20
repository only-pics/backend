class Posts {
    constructor( userId, userName, wallet, postId, postImg, description, likes, funded, bettors) {
        (this.userId = userId),
        (this.userName = userName),
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
