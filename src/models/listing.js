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
  ) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.location = location),
      (this.imageUri = imageUri),
      (this.reach = reach),
      (this.postTime = postTime);
  }
}

export default Listing;
