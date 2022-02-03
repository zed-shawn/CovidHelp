class Listing {
  constructor(
    id,
    title,
    description,
    price,
    location,
    imageUri,
    reach,
    postTime,
    upvote,
  ) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.location = location),
      (this.imageUri = imageUri),
      (this.reach = reach),
      (this.postTime = postTime),
      (this.upvote = upvote);
  }
}

export default Listing;
