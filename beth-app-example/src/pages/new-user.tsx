import Elysia from "elysia";
import { redirect } from "../../lib";
import { BaseHtml } from "../components/base";
import { ctx } from "../context";

export const newUser = new Elysia()
  .use(ctx)
  .get("/new-user", async ({ html, session, set, headers }) => {
    if (!session) {
      redirect({ set, headers }, "/login");
      return;
    }
    return html(() => (
      <BaseHtml>
        <div>
          <h1 safe>Hi New user {session.user.name}</h1>
          <p> Create new org???</p>
        </div>
      </BaseHtml>
    ));
  });
