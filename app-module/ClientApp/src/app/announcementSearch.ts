export interface AnnouncementSearch {
    includePrevious: boolean,
    includeActive: boolean,
    includeFuture: boolean,
    includeDraft: boolean,
    includePublished: boolean
  }

  export function getDefaultSearch():AnnouncementSearch {
    //3 mutually-exclusive time-statuses: Previous || Active || Future
    //2 mutually-exclusive publication-statuses: Draft || Published 
    return {
        includeActive: true,
        includeDraft: true,
        includeFuture: true,
        includePrevious: true,
        includePublished: true
      }
  }