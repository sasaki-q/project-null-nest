import { GetMessagingDto } from "dtos/messaging";

export abstract class MyRepository<T> {
    abstract get: (e: PropertyKey) => Promise<T | null>;
    abstract getAll: () => Promise<Array<T>>;
    abstract create: (data: T) => Promise<T>;

    abstract getMessaging?: (dto: GetMessagingDto) => Promise<Array<T>>;
}