import Head from "next/head";
import Router from "next/router";
import getConfig from "next/config";
import { useRouter } from "next/router";
// import fetch from "isomorphic-unfetch";

// const {
//   publicRuntimeConfig: { TEST } // Available both client and server side
//   // serverRuntimeConfig: { GITHUB_TOKEN } // Only available server side
// } = getConfig();

import styled from "styled-components";
// import NoSSR from "react-no-ssr";

import Header from "../0shared/Header";
// import logo from "./logo.png";

// import preval from "preval.macro";
import { anyPass } from "fast-fp.macro";

const isClub = ({ suit }) => suit === "♣";
const isSpade = ({ suit }) => suit === "♠";
const isBlackCard = anyPass(isClub, isSpade);

// const res = preval`
//   // const userInfo = require('os').userInfo()
//   // module.exports = userInfo.username

//     const res = require('child_process').spawnSync("node ./pages/misc/test.js", { shell: false })
//     // .toString("utf8")
//     // .trim();

//     module.exports = res;
// `;

// console.log(res);
// Weird hacky nested route attempt... works fine client side but server can't handle (RR crushes here)
// I think I miss react static
function ReadMore() {
  const Router = useRouter();

  return (
    <>
      <div>
        Click{" "}
        <span
          onClick={() => Router.push("/expirements/misc", "/expirements/misc/hey", { shallow: true })}
        >
          here
        </span>{" "}
        to read more
      </div>
      {Router.asPath.includes("hey") && <div>nested</div>}
    </>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const add1 = (arg1) => arg1 + 1;
console.scope("trial add");
const Home = () => {
  const pipelineExample = 2 |> add1 |> add1;

  return (
    <>
      <Head>
        <title>Miscellaneous Examples</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* <div>babel macros: {res.id}</div> */}
      {/* <div> */}
        {/* Colocated/Hashed Image: <img src={logo} /> */}
      {/* </div> */}
      {/* <p>Dotenv: {TEST}</p> */}
      <Title>This is from the pipeline operator: {pipelineExample}</Title>
      {/* <NoSSR onSSR={<p>loading in ssr</p>}>
        <section>
          <h2>
            NoSSR Guard: This section is <em>only</em> client-side rendered.
          </h2>
        </section>
      </NoSSR> */}
      <ReadMore />
      <div>
        fp test: meets?:{" "}
        {isBlackCard({ rank: "10", suit: "♣" }) ? "matchy" : "no matchy"}
      </div>
      <div>optional chain test: ???</div>
      <div>import-all test: ???</div>
    </>
  );
};

export default Home;
