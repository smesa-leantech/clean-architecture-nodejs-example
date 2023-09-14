export interface Request {
  body: any;
  params: any;
  query: any;
  user: any;
}

export interface Response {
  send: (body?: any) => Response;
  status: (code: number) => Response;
  json: (body?: any) => Response;
}

export interface NextFunction {
  (err?: any): void;
}