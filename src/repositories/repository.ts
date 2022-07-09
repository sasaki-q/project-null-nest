export abstract class MyRepository<T> {
    abstract create: (data: T) => Promise<T>;
}