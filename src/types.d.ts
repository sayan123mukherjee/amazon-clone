export type TodoItem = {
	id: number;
	title: string;
	isComplete: boolean;
};

export type dropDownDataItemType = {
	name: string;
};

export type dropDownDataType = {
	names: Array<dropDownDataItemType>;
};

declare module 'module_name' {
	export function checkValue(str: string): string;
}

export type directoryData = {
	title: string;
	imageUrl: string;
	id: number;
	linkUrl: string;
	size?: string;
};
