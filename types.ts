export enum LinkCategory {
  SOCIAL = '소셜',
  WORK = '업무',
  BLOG = '블로그',
  CONTACT = '연락처'
}

export interface LinkItemData {
  id: string;
  title: string;
  url: string;
  category: LinkCategory;
  description?: string;
  iconName?: string; // Simplified icon mapping key
}

export interface ProfileData {
  name: string;
  bio: string;
  avatarUrl: string;
}