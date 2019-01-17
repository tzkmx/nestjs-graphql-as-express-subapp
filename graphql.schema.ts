/* tslint:disable */
export interface HelloMessage {
    hello: string;
    date: number;
}

export interface IQuery {
    hello(name: string): HelloMessage | Promise<HelloMessage>;
}
