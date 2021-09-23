import { Personalinfo } from "./Personalinfo";
import { Professionalinfo } from "./Professionalinfo";
import { Imagegallery } from "./Imagegallery";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <table>
        <tr>
          <td>
            <Personalinfo />
          </td>
          <td>
            <Professionalinfo />
          </td>
        </tr>
        <tr>
            <td colSpan="2"><Imagegallery /></td>
        </tr>
      </table>
    </div>
  );
};