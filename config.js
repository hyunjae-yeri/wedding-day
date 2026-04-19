/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "현제",
    nameEn: "Groom",
    father: "박희림",
    mother: "장미희",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "예리",
    nameEn: "Bride",
    father: "류태욱",
    mother: "변은미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-30",
    time: "13:40",
    venue: "더베뉴지\n\n네이처홀",
    hall: "네이처홀",
    address: "서울 강서구 강서로 388",
    tel: "02-2657-2100",
    mapLinks: {
      kakao: "https://place.map.kakao.com/8700757",
      naver: "https://map.naver.com/p/entry/place/33499928?c=15.00,0,0,0,dh&placePath=/home?from=map&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202603212020&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202603212016&locale=ko&svcName=map_pcv5/"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "햇살 아래 반짝이는 초록빛처럼\n설레는 마음으로 인사드립니다.\n두 사람이 하나 되어 싱그러운 일상을\n그려나가려 합니다.\n\n부디 오셔서 저희의 시작에\n따뜻한 축복의 햇살을 더해주시면\n감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박현제", bank: "신한은행", number: "110468-888150" },
      { role: "아버지", name: "박희림", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "장미희", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "류예리", bank: "카카오뱅크", number: "3333-12-8027325" },
      { role: "아버지", name: "류태욱", bank: "우체국", number: "013946-02-168227" },
      { role: "어머니", name: "변은미", bank: "카카오뱅크", number: "3333-15-5312961" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "박현제 ♥ 류예리 결혼합니다",
    description: "2026년 8월 30일, 소중한 분들을 초대합니다."
  }
};
