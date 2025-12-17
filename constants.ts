import { LinkItemData, LinkCategory, ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "김개발",
  bio: "프론트엔드 엔지니어 | 커피와 고양이를 좋아합니다 ☕️🐱",
  avatarUrl: "https://picsum.photos/200/200"
};

export const LINKS_DATA: LinkItemData[] = [
  {
    id: '1',
    title: '포트폴리오 웹사이트',
    url: 'https://example.com/portfolio',
    category: LinkCategory.WORK,
    description: '저의 최근 프로젝트들을 확인해보세요.',
    iconName: 'briefcase'
  },
  {
    id: '2',
    title: '기술 블로그 (Velog)',
    url: 'https://velog.io',
    category: LinkCategory.BLOG,
    description: '매주 개발 회고와 팁을 작성합니다.',
    iconName: 'pencil'
  },
  {
    id: '3',
    title: 'GitHub',
    url: 'https://github.com',
    category: LinkCategory.WORK,
    iconName: 'github'
  },
  {
    id: '4',
    title: 'Instagram',
    url: 'https://instagram.com',
    category: LinkCategory.SOCIAL,
    iconName: 'instagram'
  },
  {
    id: '5',
    title: 'YouTube 채널',
    url: 'https://youtube.com',
    category: LinkCategory.SOCIAL,
    description: '코딩 튜토리얼 영상을 올립니다.',
    iconName: 'youtube'
  },
  {
    id: '6',
    title: '오픈카톡 문의',
    url: 'https://kakao.com',
    category: LinkCategory.CONTACT,
    iconName: 'message'
  },
  {
    id: '7',
    title: '이메일 보내기',
    url: 'mailto:dev.kim@example.com',
    category: LinkCategory.CONTACT,
    iconName: 'mail'
  }
];