import * as React from "react";
import { ReactElement } from "react";
import "./style.css";

interface TimeTableProps {
  definition: ReactElement;
  forms: Record<
    "future" | "present" | "past",
    Record<
      "1_i" | "2_you" | "3_he_she_it" | "4_we" | "5_you_all" | "6_they",
      string[]
    >
  >;
}

export function TimeTable(props: TimeTableProps) {
  return (
    <table className="time-table">
      <thead>
        <tr className={"border"}>
          <td colSpan={4}>{props.definition}</td>
        </tr>
        <tr className={"border"}>
          <td className={"time-column border"} />
          <td className={"question-column border"}>?</td>
          <td className={"statement-column border"}>✓</td>
          <td className={"negative-column"}>✗</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={6} className={"time-column border"}>
            Буд.
          </td>
          <td rowSpan={6} className={"border"}>
            Gelo
            <br />
            Ma
            <br />
            ... ?
          </td>
          <td className={"border"}>ezê {props.forms.future["1_i"][0]}</td>
          <td>ezê {props.forms.future["1_i"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>tuyê {props.forms.future["2_you"][0]}</td>
          <td>tuyê {props.forms.future["2_you"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>
            ewê {props.forms.future["3_he_she_it"][0]}
          </td>
          <td>ewê {props.forms.future["3_he_she_it"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>emê {props.forms.future["4_we"][0]}</td>
          <td>emê {props.forms.future["4_we"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>
            hûnê {props.forms.future["5_you_all"][0]}
          </td>
          <td>hûnê {props.forms.future["5_you_all"][1]}</td>
        </tr>
        <tr className={"border"}>
          <td className={"border"}>ewê {props.forms.future["6_they"][0]}</td>
          <td>ewê {props.forms.future["6_they"][1]}</td>
        </tr>
        <tr>
          <td rowSpan={6} className={"time-column border"}>
            Наст.
          </td>
          <td rowSpan={6} className={"border"}>
            Gelo
            <br />
            Ma
            <br />
            ... ?
          </td>
          <td className={"border"}>ez {props.forms.present["1_i"][0]}</td>
          <td>ez {props.forms.present["1_i"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>tu {props.forms.present["2_you"][0]}</td>
          <td>tu {props.forms.present["2_you"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>
            ew {props.forms.present["3_he_she_it"][0]}
          </td>
          <td>ew {props.forms.present["3_he_she_it"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>em {props.forms.present["4_we"][0]}</td>
          <td>em {props.forms.present["4_we"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>
            hûn {props.forms.present["5_you_all"][0]}
          </td>
          <td>hûn {props.forms.present["5_you_all"][1]}</td>
        </tr>
        <tr className={"border"}>
          <td className={"border"}>ew {props.forms.present["6_they"][0]}</td>
          <td>ew {props.forms.present["6_they"][1]}</td>
        </tr>
        <tr>
          <td rowSpan={6} className={"time-column border"}>
            Прош.
          </td>
          <td rowSpan={6} className={"border"}>
            Gelo
            <br />
            Ma
            <br />
            ... ?
          </td>
          <td className={"border"}>ez {props.forms.past["1_i"][0]}</td>
          <td>ez {props.forms.past["1_i"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>tu {props.forms.past["2_you"][0]}</td>
          <td>tu {props.forms.past["2_you"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>ew {props.forms.past["3_he_she_it"][0]}</td>
          <td>ew {props.forms.past["3_he_she_it"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>em {props.forms.past["4_we"][0]}</td>
          <td>em {props.forms.past["4_we"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>hûn {props.forms.past["5_you_all"][0]}</td>
          <td>hûn {props.forms.past["5_you_all"][1]}</td>
        </tr>
        <tr>
          <td className={"border"}>ew {props.forms.past["6_they"][0]}</td>
          <td>ew {props.forms.past["6_they"][1]}</td>
        </tr>
      </tbody>
    </table>
  );
}
