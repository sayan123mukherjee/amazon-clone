type TodoItem = {
	id: number;
	title: string;
	isComplete: boolean;
};

type dropDownDataItemType = {
	name: string;
};

type dropDownDataType = {
	names: Array<dropDownDataItemType>;
};

declare module 'module_name' {
	export function checkValue(str: string): string;
}
