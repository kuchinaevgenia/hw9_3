class Post {
  constructor(id, name, author, text, postingDate, likesCount) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.text = text;
    this.postingDate = postingDate;
    this.likesCount = likesCount;
  }
  changePostText(newText) {
    this.text = newText;
  }
  addLike() {
    this.likesCount++;
  }
  deleteLike() {
    if (this.likesCount > 0) {
      this.likesCount--;
    }
  }
  set likesCount(value) {
    if (typeof value !== "number") {
      throw new TypeError("Quantity of likes must be number");
    }
    if (value < 0) {
      throw new RangeError("Quantity of likes must be positive");
    }
    this._likesCount = value;
  }
  get likesCount() {
    return this._likesCount;
  }
}

try {
  const myPost = new Post(
    1,
    "post title",
    "Anna",
    "post text",
    "01-09-2026",
    0,
  );
  console.log(myPost);

  myPost.changePostText("New post text");
  console.log(myPost.text);

  myPost.addLike();
  myPost.addLike();
  console.log(myPost.likesCount);

  myPost.deleteLike();
  console.log(myPost.likesCount);

  myPost.deleteLike();
  myPost.deleteLike();
  console.log(myPost.likesCount);

  myPost.likesCount = 10;
  console.log(myPost.likesCount);

  myPost.likesCount = -10;
  console.log(myPost.likesCount);
} catch (err) {
  console.log("err", err);
}
