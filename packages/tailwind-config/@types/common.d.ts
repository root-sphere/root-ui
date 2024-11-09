declare type Nullable<T> = T | null
declare type Optional<T> = T | undefined
declare type Maybe<T> = T | null | undefined

declare type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
declare type NullableBy<T, K extends keyof T> = Omit<T, K> & {
  [P in keyof Pick<T, K>]: Nullable<T[P]>
}
declare type OptionalBy<T, K extends keyof T> = Omit<T, K> & {
  [P in keyof Pick<T, K>]: Optional<T[P]>
}
declare type MaybeBy<T, K extends keyof T> = Omit<T, K> & {
  [P in keyof Pick<T, K>]: Maybe<T[P]>
}
declare type OmitBy<T, K extends keyof T> = Omit<T, K>

declare type Key = string | symbol | number;
declare type Entries<T extends Record<string, any>, K extends keyof T> = K extends string ? [K, T[K]] : never;
declare type Prop<T, K extends Key> = T extends null ? undefined : K extends keyof T ? T[K] : undefined;
