type Category =
  | "Art"
  | "Fashion"
  | "Funny"
  | "Inspirational"
  | "Leadership"
  | "Life"
  | "Love"
  | "Motivational"
  | "Music"
  | "People"
  | "Sports"
  | "Success"
  | "Wisdom"
  | "Work";

export interface Quote {
  author?: string;
  category: Category[];
  id: number;
  text: string;
  submitter: string;
  verified: boolean;
}
