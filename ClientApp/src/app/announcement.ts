export interface Announcement {
  idAnnoucements: number;
  title: string;
  description: string;
  type: string;
  link: string;
  background: string;
  publishDate: Date;
  expirationDate: Date;
  isDraft: boolean;
}