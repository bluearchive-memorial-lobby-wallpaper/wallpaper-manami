import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-manami",
  slug: "manami",
  title: "Manami",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 20.33333396911621,
    "lines": [
      {
        "id": "ch0339_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "我がワイルドハント芸術学院は、\n歴史のある学園です。",
          "ko": "우리 와일드헌트 예술학원은,\n역사가 깊은 학원입니다.",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "歴代の優秀な評議会長の偉業は、\n今もなお語り継がれています。",
          "ko": "역대 뛰어난 평의회장의 위업이\n지금도 전해 내려오고 있죠.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 30.000001907348633,
    "lines": [
      {
        "id": "ch0339_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "ですが、私はそこに名を\n連ねることはないでしょう。",
          "ko": "하지만, 저는 그곳에\n이름을 올리진 못할 겁니다.",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "事情があるとはいえ、\n専攻の活動もできておらず――",
          "ko": "사정이 있다고는 하나,\n전공 활동도 하지 못하고……",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_2_3",
        "text": {
          "zh-cn": "",
          "ja": "学院の運営も、\n独裁的だと評されています。",
          "ko": "학원 운영도 독재적이라는\n평을 받고 있죠.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 23.83333396911621,
    "lines": [
      {
        "id": "ch0339_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "それを不当だとは\n思っていません。",
          "ko": "그것이 부당하다\n생각하진 않습니다.",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "芸術とは、時を超えるもの。",
          "ko": "예술이란, 시간을 뛰어넘는 법.",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_3_3",
        "text": {
          "zh-cn": "",
          "ja": "私が守り抜いた芸術は、\n後世へと受け継がれていく\nことでしょう。",
          "ko": "제가 지켜낸 예술은,\n후세에도 계속해서 전해지겠죠.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 35.5,
    "lines": [
      {
        "id": "ch0339_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "この学院と、\n学院の芸術を守ること――",
          "ko": "이 학원과,\n학원의 예술을 지키는 것…….",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "それこそが、私が評議会長を\n続けている理由です。",
          "ko": "그것이야말로,\n제가 평의회장을\n계속하고 있는 이유입니다.",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_4_3",
        "text": {
          "zh-cn": "",
          "ja": "ですから、\n先生――これからも……。",
          "ko": "그러니까 선생님. 앞으로도…….",
          "en": ""
        }
      },
      {
        "id": "ch0339_memoriallobby_4_4",
        "text": {
          "zh-cn": "",
          "ja": "こんな私を、\n見守っていてくれますよね？",
          "ko": "이런 저를, 지켜봐 주실 거죠?",
          "en": ""
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
