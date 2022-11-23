import { Controller, Request, Response } from "@webtypen/webframez-core";

export class TestController extends Controller {
  test(req: Request, res: Response) {
    return res.send({
      status: "success",
    });
  }
}
