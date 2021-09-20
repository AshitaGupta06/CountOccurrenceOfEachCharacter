import express, { Express, Request, Response, Router } from "express";
import { IDuplicateLetterResponse } from "../models/i-duplicate-letter-response";
import { StringService } from "../service/string.service";

export class StringRouter {
  public router: Router = express.Router();
  private stringService: StringService = new StringService();

  constructor(app: Express, baseRoute: string) {
    app.use(`${baseRoute}`, this.router);
    this.router.get(`/findDuplicate`, this.findDublicateCount);
  }

  public findDublicateCount = async (request: Request, response: Response) => {
    try {
      const inputStr: string = request.query.input as string;

      if (!inputStr) {
        throw "Missing Query Param input";
      }

      const result: IDuplicateLetterResponse = this.stringService.calculateDuplicateLetters(inputStr);

      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({detail: error }).end();
    }
  }
}