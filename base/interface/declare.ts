// declare var jQuery: (selector: string) => any;

declare function jQuery(selector: string): any;
declare function jQuery(doReadyCallback: () => any): any;

declare class Animal{
    name: string;
    cnstructor(name: string);
    sayHi(): string;
}