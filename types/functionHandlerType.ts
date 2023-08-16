export interface FunctionHandler {
  <Type extends string>(arg: Type): void;
}
