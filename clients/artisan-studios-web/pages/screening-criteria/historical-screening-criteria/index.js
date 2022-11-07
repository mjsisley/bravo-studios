import Head from "next/head";
import Link from  "next/link";

const Home = () => {
    // const user = useContext(AuthContext);
    // console.log(user);
    return (
      <>
        <Head>
          <title>Home</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Historical Criteria</h1>
        
        <Link href="/screening-criteria/historical-screening-criteria/criteria-effective-20220129">Effective 01/29/2022</Link>
      </>
    );
  };
  
  export default Home;
  