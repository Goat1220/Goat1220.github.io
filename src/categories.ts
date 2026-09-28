// 블로그 카테고리 (메뉴 순서대로). 글 frontmatter의 category에는 키(daily 등)를 쓰고, 화면에는 이름이 나간다.
export const CATEGORIES = {
  daily: { name: '일상', description: '개발 밖의 소소한 이야기.' },
  gamedev: { name: '게임 개발', description: '게임을 직접 만들며 기획이 구현을 만나 달라지는 과정을 기록합니다.' },
  study: { name: '코딩 공부', description: '게임을 만들며 배운 프로그래밍과 도구 이야기를 정리합니다.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];
