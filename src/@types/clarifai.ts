export type IConcepts = {
  id: string;
  name: string;
  value: number;
  app_id: string;
};

export type IClarifaiReponse = {
  outputs: {
    data: {
      concepts: IConcepts[];
    };
  }[];
};
