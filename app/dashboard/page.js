import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";
import Datasetlist from "../components/datadetails/datasetlist";
import Projectlist from "../components/projectdetails/projectlist";
//import Projectlist from './Project-Details/Projectlist';

const styles = {
  wrapper: `flex items-center justify-center`,
  newdata: `py-1`,
  accentedButton: `bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2`,
  plusiconcontainer: `cursor-pointer`,
};

const AI2 = (props) => {
  return (
    <div>
      <h1>Welcome to AI 2.O</h1>
      <div className={styles.wrapper}>
        <div className="px-3">
          <Link href="/components/datadetails/addnewdataset">
            <div className="py-1">
              <button className={styles.accentedButton}>
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Create New Dataset
              </button>
            </div>
          </Link>
          <Datasetlist />
        </div>
        <div className="px-3">
          <Link href="/components/projectdetails/addnewproject">
            <div>
              <button className={styles.accentedButton}>
                <span className={styles.plusiconcontainer}>
                  <AiFillPlusCircle className="h-5 w-5" />
                </span>
                Add New Project
              </button>
            </div>
          </Link>
          <Projectlist />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/projectList");
  let myprops = await data.json();
  return {
    props: { myprops },
  };
}

export default AI2;
