---
title: "DungeonRace 도트 에셋 무료 공유 — 캐릭터 6종, 몬스터 11종, 던전 타일, 이펙트"
description: "DungeonRace를 만들면서 AI(PixelLab)로 만들고 손으로 고친 탑다운 도트 그림을 파일로 공유합니다. 출처만 적으면 개인·상업 프로젝트에 무료로 쓸 수 있어요."
date: 2026-10-07
category: gamedev
tags: ["DungeonRace", "픽셀아트", "PixelLab", "무료 에셋"]
image: /posts/pixel-assets-01/cover.png
draft: false
---

DungeonRace를 만들면서 쌓인 도트 그림을 공유합니다. 혹시 쓰실 분이 있을까 해서 파일로 받을 수 있게 올려 둬요.

![캐릭터 6종과 몬스터 11종](/posts/pixel-assets-01/cover.png)

전부 **AI(PixelLab)로 만들고 손으로 고친 그림**입니다. 어떻게 만들었고 어디서 헤맸는지는 [개발일지 1편](/posts/devlog-01/), [2편](/posts/devlog-02/), [3편](/posts/devlog-03/)에 적어 뒀어요.

## 받기

- **[전체 한 번에 받기 (zip, 1.2MB)](/posts/pixel-assets-01/DungeonRacePixelAssets.zip)**
- [캐릭터 6종만 (359KB)](/posts/pixel-assets-01/DungeonRace_Characters.zip)
- [몬스터 11종만 (598KB)](/posts/pixel-assets-01/DungeonRace_Monsters.zip)
- [던전 타일·소품만 (74KB)](/posts/pixel-assets-01/DungeonRace_Dungeon.zip)
- [공격 이펙트만 (73KB)](/posts/pixel-assets-01/DungeonRace_Effects.zip)
- [UI 그림만 (69KB)](/posts/pixel-assets-01/DungeonRace_UI.zip)

모두 PNG 파일이고, 프레임 한 장이 파일 하나입니다. zip마다 설명(README.txt)과 사용 조건(LICENSE.txt)이 들어 있어요.

## 사용 조건

- 개인 프로젝트, 상업 프로젝트 모두 **무료**로 쓸 수 있습니다. 수정해서 써도 됩니다.
- **출처 표기는 꼭 해 주세요.** 크레딧 화면이나 게임 설명에 `Pixel art by Goat1220 (goat1220.github.io)`라고 적어 주시면 됩니다.
- 그림 자체를 다시 팔거나 배포하는 것, 다른 에셋 팩에 넣는 것은 안 됩니다.
- AI 모델 학습에는 쓰지 말아 주세요.

## 캐릭터 6종

바바리안, 파이터, 마법사, 클레릭, 레인저, 바드입니다.

![왼쪽부터 바바리안, 파이터, 마법사, 클레릭, 레인저, 바드](/posts/pixel-assets-01/characters.png)

- 크기: 56×56 캔버스 (캐릭터 키는 32픽셀 정도)
- 걷기: 4방향 × 8프레임
- 공격: 4방향 × 8프레임 (직업마다 다른 동작)
- 서 있기: 4방향 / 앉기: 3방향(남, 서, 동)

![파이터 공격 동작 (위부터 남, 동, 북, 서)](/posts/pixel-assets-01/fighter_attack.png)

![캐릭터 6종이 걷는 모습](/posts/pixel-assets-01/lineup.gif)

## 몬스터 11종

![윗줄: 고블린, 좀비, 스켈레톤, 오우거, 거대 거미 / 아랫줄: 보스 6종](/posts/pixel-assets-01/monsters.png)

- 일반 5종: 고블린, 좀비, 스켈레톤(44×44), 오우거(92×92), 거대 거미(96×96)
- 보스 6종(72×72): 고블린 대장, 오크 대장, 오크 족장, 트롤 로드, 흑기사, 데스나이트
- 서 있기 4방향 + 공격 4방향이 들어 있습니다. **걷기 동작은 없어요.** 게임에서 몬스터는 제자리에서 싸우기만 해서 만들지 않았습니다.
- 공격 프레임 수는 몬스터와 방향에 따라 5~8장으로 다릅니다. 빛이 섞이거나 무기가 사라진 프레임은 빼고 넣었기 때문이에요.

## 던전 타일과 소품

고블린 동굴, 던전, 미궁, 고대 신전 네 가지 테마입니다.

![위부터 고블린 동굴, 던전, 미궁, 고대 신전. 왼쪽 6개가 바닥·벽 조각, 나머지가 소품](/posts/pixel-assets-01/dungeon.png)

- 테마마다 바닥 1개 + 벽 5개(뒷벽, 왼쪽·오른쪽 옆벽, 뒷벽 끝 조각 2개)
- 바닥 한 칸은 16×12픽셀이고, 조각은 24×42 캔버스에 들어 있습니다.
- 테마마다 소품 14개(바닥에 놓는 것 8개, 벽에 거는 것 6개)
- 아래쪽(남쪽) 벽은 없습니다. 아래 벽을 그리면 캐릭터가 떠 보여서 게임에서도 안 쓰고 있어요.

벽을 어떤 순서로 깔아야 자연스러운지는 그림만 봐서는 알기 어렵습니다. 실제로 깔린 모습은 [개발일지 1편](/posts/devlog-01/)의 테마 사진을 참고해 주세요.

## 공격 이펙트 8종

![위부터 베기, 내려찍기, 타격 불꽃, 마력 구체, 마력 폭발, 성스러운 빛, 음표, 화살](/posts/pixel-assets-01/effects.png)

- 베기, 내려찍기: 64×64, 9프레임
- 타격 불꽃, 마력 구체, 마력 폭발, 성스러운 빛, 음표: 48×48, 5~8프레임
- 화살: 32×32, 1장 (날아가는 방향으로 돌려서 씁니다)

## UI 그림

메인 화면 배경, 던전 선택 카드 그림, 던전 입장 화면 그림입니다. 가로 180픽셀 화면에 맞춰 만든 거라 DungeonRace가 아닌 게임에 그대로 쓰기는 어려울 수 있어요.

## Unity에서 쓸 때

- Texture Type: Sprite (2D and UI)
- Pixels Per Unit: 32
- Filter Mode: Point (no filter)
- Compression: None

Filter Mode를 Point로 안 바꾸면 도트가 뿌옇게 번져 보입니다.

## 알아 두실 점

- AI로 만든 그림이라 프레임 사이에 조금씩 어긋나는 곳이 남아 있습니다. 눈에 띄는 건 손으로 고쳤지만 전부 잡지는 못했어요.
- 일부 캐릭터와 몬스터의 서쪽 그림은 동쪽 그림을 좌우로 뒤집은 것입니다.
- 게임을 계속 만드는 중이라, 그림이 바뀌거나 늘어나면 이 글의 파일도 새로 올리겠습니다.
