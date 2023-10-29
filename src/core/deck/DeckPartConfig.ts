import { DeckPart } from "./Deck";

export interface DeckPartConfig {
	readonly name: string;
	readonly indicator: string;
	readonly min: number;
	readonly max: number;
	readonly recommended: number;
}

export const DefaultDeckPartConfig = {
	[DeckPart.MAIN]: {
		name: "Main",
		indicator: "#main",
		min: 85,
		max: 85,
		recommended: 85,
	},
	[DeckPart.EXTRA]: {
		name: "Extra",
		indicator: "#extra",
		min: 0,
		max: 14,
		recommended: 14,
	},
	[DeckPart.ATEMORI]: {
		name: "Atemori",
		indicator: "!atemori",
		min: 1,
		max: 1,
		recommended: 1,
	},
} as const;
