import { Config } from "tailwindcss";

declare module "tailwindcss/types/config" {
  export interface CorePluginList {
    animate: Partial<Config["theme"]["animate"]>;
  }
}
