//Authは認証。
//必要なモジュールのインポート
import { useState } from "react"; //ReactHooksのuseState(コンポーネントが内部で保持する「状態」)
import { useRouter } from "next/router"; //next.jsからuseRouter
import Cookie from "universal-cookie"; //universal-cookieからCookie

//取得したJWTトークンをCookieに格納する。
const cookie = new Cookie();

const Auth:React.FC = () => {
  const router = useRouter(); //useRouterの実行。routerは関数の中からページ遷移をしたい場合に使うことができる
  const [email, setEmail] = useState(""); //useStateでlocalStateを定義する。
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); //ログイン、レジスターモードを定義するState

  //ログイン処理。ログイン用の関数
  const login = async () => {
    try {
      //例外が発生した場合は下のcatchで取得しalertでerrorを出す。
      await fetch(
        //JWTトークンの取得
        `${process.env.NEXT_PUBLIC_REST_API_URL}api/v1/auth/sign_in`,
        {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      //fetchの後処理
        .then((res) => {
          //上のfetchの結果をresで受け取る
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          //取得したアクセストークンをcookieにセット
          const options = { path: "/" };
          cookie.set("access-token", data.access, options);
        });
        //上記の処理が成功した場合...
      router.push("/top-contents"); //mainpageに自動遷移
    } catch (err) {
      alert(err);
    }
  };

  //フォームの処理。submitボタンが押された時に呼び出される関数
  const authUser = async (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault(); //自動リロードを防ぐ
    if (isLogin) {
      login();
    } else {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}api/v1/auth/sign_in`, {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 400) {
            throw "authentication failed";
          }
        });
        login();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
      <div className="space-y-8 mt-1">
        <div>
          <img
            className="mx-auto h-10 w-auto"
            src="/images/logo.png"
            alt="Workflow"
          />
          <h2 className="mt-10 text-center text-3xl font-extrabold text-white">
            {isLogin ? "Login" : "Sign up"}
          </h2>
        </div>
        <form className="mt-8 space-y-6 sm:mx-0 -mx-14" onSubmit={authUser} >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs sm:text-sm"
                placeholder="email address"
                value={email}
                onChange={(e) => {
                  //タイピングで値を変化させた時。
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer font-medium text-white hover:text-gray-500"
              >
                ログイン or アカウント作成
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isLogin ? "ログイン" : "アカウント作成"}
            </button>
          </div>
        </form>
      </div>
  );
}
export default Auth;
