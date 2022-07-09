export abstract class MyRepository<T> {
    abstract getAll: () => Promise<Array<T>>;
}