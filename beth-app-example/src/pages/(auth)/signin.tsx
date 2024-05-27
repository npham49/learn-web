import Elysia from "elysia";
import { BaseHtml } from "../../components/base";
import { ctx } from "../../context";

export const login = new Elysia().use(ctx).get("/login", async (ctx) => {
  const authRequest = ctx.auth.handleRequest(ctx);
  const session = await authRequest.validate();
  if (session) {
    ctx.set.redirect = "/";
    return;
  }

  return ctx.html(() => (
    <BaseHtml>
      <div
        class="flex h-screen w-full flex-col items-center justify-center bg-gray-200"
        hx-ext="response-targets"
      >
        <div class="p-4">
          <a
            href="/"
            class="text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            Go Home
          </a>
        </div>
        <a
          hx-boost="false"
          href="/api/auth/login/google"
          class="display-block rounded-lg bg-blue-700 p-2 text-center text-white transition duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Sign In with Google
          <div class="i-logos-google-icon inline-block text-2xl" />
        </a>
        <div id="errorMessage" class="pt-4 text-red-500"></div>
      </div>
    </BaseHtml>
  ));
});
// .get("/login/github", async ({ set }) => {
//   const [url, state] = await githubAuth.getAuthorizationUrl();

//   const stateCookie = serializeCookie("github_oauth_state", state, {
//     maxAge: 60 * 60,
//     secure: config.env.NODE_ENV === "production",
//     httpOnly: true,
//     path: "/",
//   });

//   set.headers["Set-Cookie"] = stateCookie;
//   set.redirect = url.toString();
// })
// .get(
//   "/login/github/callback",
//   async ({ request, log, path, query, set, auth }) => {
//     const { code, state } = query;

//     const cookies = parseCookie(request.headers.get("Cookie") ?? "");
//     const storedState = cookies.github_oauth_state;

//     if (!storedState || !state || storedState !== state || !code) {
//       set.status = 400;
//       return "Invalid state";
//     }

//     try {
//       const { getExistingUser, githubUser, createUser } =
//         await githubAuth.validateCallback(code);

//       const getUser = async () => {
//         const existingUser = await getExistingUser();
//         if (existingUser) return existingUser;
//         const user = await createUser({
//           attributes: {
//             handle: githubUser.login,
//           },
//         });
//         return user;
//       };

//       const user = await getUser();
//       const session = await auth.createSession({
//         userId: user.userId,
//         attributes: {},
//       });
//       const sessionCookie = auth.createSessionCookie(session);
//       // redirect to profile page
//       return new Response(null, {
//         headers: {
//           Location: "/",
//           "Set-Cookie": sessionCookie.serialize(), // store session cookie
//         },
//         status: 302,
//       });
//     } catch (e) {
//       if (e instanceof OAuthRequestError) {
//         // invalid code
//         set.status = 400;
//         return e.message;
//       }
//       set.status = 500;
//       log.error(e);
//       return "Internal server error";
//     }
//   },
// );
