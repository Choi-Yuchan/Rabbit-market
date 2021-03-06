import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
const cookieoptions = {
  cookieName: "rabbitsession",
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieoptions);
}

export function withSsrSession(handler: any) {
  return withIronSessionSsr(handler, cookieoptions);
}
