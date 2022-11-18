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

export function blankAnnouncement(id: number): Announcement{
  return {
      idAnnoucements: id,
      title: "",
      description: "",
      type: "",
      link: "",
      background: "",
      publishDate: new Date(),
      expirationDate: new Date(),
      isDraft: false
  }
} 