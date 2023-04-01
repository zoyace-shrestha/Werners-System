import { Announcement } from "./announcement";

export interface SignalRAnnouncementBroadcast {
  broadcastType: BroadcastType;
  announcement: Announcement;
}

export enum BroadcastType {
  Create,
  Update,
  Delete
}