import { BaseKernelWeb, Request, Response } from "@webtypen/webframez-core";
import { TestController } from "./Controller/TestController";

export class Kernel extends BaseKernelWeb {
  static controller: { [key: string]: any } = {
    TestController: TestController,
  };

  static middleware: { [key: string]: any } = {
    auth: async (next: any, abort: any, req: Request, res: Response) => {
      console.log("auth-middleware");
      next();
    },
  };
}
