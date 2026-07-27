// The wire shapes returned by the socialsim API, declared locally rather than
// imported from that project.
//
// This is deliberate: the UI should depend on the API contract, not on the
// engine's internal types. The two deploy separately, so a refactor over there
// shouldn't be able to break a build here — only an actual contract change
// should, and that would show up as a type error worth having.

export type NPCCharacter = 'hiyori' | 'shiori' | 'yuki';
export type RelationshipStage = 'Stranger' | 'Acquaintance' | 'Friend' | 'Close Friend';
export type ActivitySegmentName = 'morning_activity' | 'activity_after_lunch' | 'activity_after_dinner';
export type ScheduleSegmentType = 'locked' | 'free' | 'activity';
export type EndDayStage = 'scoring' | 'reflecting' | 'diary' | 'saving';

export interface GameState {
  session_id: string;
  current_day: number;
  affection: number;
  relationship_stage: string;
  yuki_affection: number;
  confessed: boolean;
  game_over: boolean;
  ending_id: string | null;
}

export interface ScheduleSegment {
  name: string;
  type: ScheduleSegmentType;
  startHour: number;
  durationHours: number;
}

interface Beat {
  id: string;
  description: string;
  player_action_prompt: string;
}

export interface ResolvedSegment {
  segment: ActivitySegmentName;
  flavor?: string;
  event?: Beat & { title: string };
  subEvent?: Beat;
  eventLogId?: string;
}

export interface DayPlan {
  day: number;
  schedule: ScheduleSegment[];
  segments: ResolvedSegment[];
  startedArc: { id: string; title: string } | null;
  activeArc: { event: { id: string; title: string }; startDay: number } | null;
}

export interface EndDayResult {
  newAffection: number;
  newYukiAffection: number;
  newStage: RelationshipStage;
  diaryGenerated: boolean;
  eventAffectionDelta: number;
  eventYukiAffectionDelta: number;
  ending: string | null;
}

export interface Ending {
  id: string;
  title: string;
  description: string;
  scene: string;
}
