class Listing {
  constructor(id, title, description, price, location, imageUri) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.location = location),
      (this.imageUri = imageUri);
  }
}

export default Listing;
