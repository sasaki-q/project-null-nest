export abstract class MyRepository<T> {
    abstract get: (e: PropertyKey) => Promise<T | null>;
    abstract create: (data: T) => Promise<T>;
}