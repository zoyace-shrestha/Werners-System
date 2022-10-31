export interface Announcement {
  id     : number;
  title: string;
  description: string;
  type: string;
  link: string;
  background: string;
  publishDate: Date;
  expirationDate: Date;
  isDraft: boolean;
}


// export interface Announcement {
//   id?: number;
//   title?: string;
//   description?: string;
//   type?: string;
//   link?: string;
//   background?: string;
//   publishDate?: Date;
//   expirationDate?: Date;
//   isDraft?: boolean;
// }