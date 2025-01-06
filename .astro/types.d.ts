declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"bestiary/bandits.md": {
	id: "bestiary/bandits.md";
  slug: "bestiary/bandits";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"classes/the-azure-mountain.md": {
	id: "classes/the-azure-mountain.md";
  slug: "classes/the-azure-mountain";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"classes/the-celadon-tower.md": {
	id: "classes/the-celadon-tower.md";
  slug: "classes/the-celadon-tower";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"classes/the-red-wood.md": {
	id: "classes/the-red-wood.md";
  slug: "classes/the-red-wood";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"classes/the-sable-spire.md": {
	id: "classes/the-sable-spire.md";
  slug: "classes/the-sable-spire";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"classes/the-umber-trees.md": {
	id: "classes/the-umber-trees.md";
  slug: "classes/the-umber-trees";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"classes/the-white-ash-temple.md": {
	id: "classes/the-white-ash-temple.md";
  slug: "classes/the-white-ash-temple";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"introduction.md": {
	id: "introduction.md";
  slug: "introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/character-creation.md": {
	id: "rules/character-creation.md";
  slug: "rules/character-creation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/checks.md": {
	id: "rules/checks.md";
  slug: "rules/checks";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/combat.md": {
	id: "rules/combat.md";
  slug: "rules/combat";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/equipment.md": {
	id: "rules/equipment.md";
  slug: "rules/equipment";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/feats.md": {
	id: "rules/feats.md";
  slug: "rules/feats";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/system.md": {
	id: "rules/system.md";
  slug: "rules/system";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"rules/wounds.md": {
	id: "rules/wounds.md";
  slug: "rules/wounds";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"setting/history.md": {
	id: "setting/history.md";
  slug: "setting/history";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"setting/notable-characters.md": {
	id: "setting/notable-characters.md";
  slug: "setting/notable-characters";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"setting/paladins.md": {
	id: "setting/paladins.md";
  slug: "setting/paladins";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"i18n": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
