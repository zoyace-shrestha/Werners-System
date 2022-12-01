export interface Announcement {
  idAnnouncements: number;
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
      idAnnouncements: id,
      title: "",
      description: "",
      type: "",
      link: "",
      background: "",
      publishDate: new Date(0),
      expirationDate: new Date(0),
      isDraft: false
  }
} 
