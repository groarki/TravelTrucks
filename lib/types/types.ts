export interface Camper {
    id: number,
      name: string,
      price: number,
      rating: number,
      location: string,
      description: string,
      form: string,
      transmission: string,
      engine: string,
      AC: boolean,
      bathroom: boolean,
      kitchen: boolean,
      TV:boolean,
      radio:boolean,
      refrigerator: boolean,
      microwave: boolean,
      gas: boolean,
    water: boolean,
    gallery: Images[],
    reviews: Reviews[],
};

export interface Images {
    thumb: string,
    original: string,
};

export interface Reviews {
    reviewer_name: string,
    reviewer_rating: number,
    comment: string,
};