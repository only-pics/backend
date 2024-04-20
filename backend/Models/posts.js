class Posts {
    constructor(postId, postImg, userId, userName, description, likes, funded, bettors) {
        (this.postId = postId),
        (this.postImg = postImg),
        (this.userId = userId),
        (this.userName = userName),
        (this.description = description),
        (this.likes = likes),
        (this.funded = funded),
        (this.bettors = bettors);
    }
}

export default Posts;
