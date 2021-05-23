import * as React from "react";
import { ReactElement } from "react";
import "./style.css";

interface TimeTableProps {
  definition: ReactElement;
  customRowGroupName?: string;
  verbIs: "transitive" | "intransitive";
  forms: Record<
    "future" | "present" | "past" | "custom",
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
        {props.definition && (
          <tr className={"border"}>
            <td colSpan={4}>{props.definition}</td>
          </tr>
        )}
        <tr className={"border"}>
          <td className={"time-column border"} />
          <td className={"question-column border"}>?</td>
          <td className={"statement-column border"}>✓</td>
          <td className={"negative-column"}>✗</td>
        </tr>
      </thead>
      <tbody>
        {props.forms.future && (
          <>
            <tr className={"border"}>
              <td className={"time-column border"}>
                <span>Буд.</span>
              </td>
              <td className={"border"}>
                Gelo
                <br />
                Ma
                <br />
                ... ?
              </td>
              <td className={"border"}>
                ezê {props.forms.future["1_i"][0]}
                <br />
                tuyê {props.forms.future["2_you"][0]}
                <br />
                ewê {props.forms.future["3_he_she_it"][0]}
                <br />
                emê {props.forms.future["4_we"][0]}
                <br />
                hûnê {props.forms.future["5_you_all"][0]}
                <br />
                ewê {props.forms.future["6_they"][0]}
              </td>
              <td>
                ezê {props.forms.future["1_i"][1]}
                <br />
                tuyê {props.forms.future["2_you"][1]}
                <br />
                ewê {props.forms.future["3_he_she_it"][1]}
                <br />
                emê {props.forms.future["4_we"][1]}
                <br />
                hûnê {props.forms.future["5_you_all"][1]}
                <br />
                ewê {props.forms.future["6_they"][1]}
                <br />
              </td>
            </tr>
          </>
        )}
        {props.forms.present && (
          <>
            <tr className={"border"}>
              <td className={"time-column border"}>
                <span>Наст.</span>
              </td>
              <td className={"border"}>
                Gelo
                <br />
                Ma
                <br />
                ... ?
              </td>
              <td className={"border"}>
                ez {props.forms.present["1_i"][0]}
                <br />
                tu {props.forms.present["2_you"][0]}
                <br />
                ew {props.forms.present["3_he_she_it"][0]}
                <br />
                em {props.forms.present["4_we"][0]}
                <br />
                hûn {props.forms.present["5_you_all"][0]}
                <br />
                ew {props.forms.present["6_they"][0]}
              </td>
              <td>
                ez {props.forms.present["1_i"][1]}
                <br />
                tu {props.forms.present["2_you"][1]}
                <br />
                ew {props.forms.present["3_he_she_it"][1]}
                <br />
                em {props.forms.present["4_we"][1]}
                <br />
                hûn {props.forms.present["5_you_all"][1]}
                <br />
                ew {props.forms.present["6_they"][1]}
              </td>
            </tr>
          </>
        )}
        {props.forms.past && (
          <>
            <tr>
              <td className={"time-column border"}>
                <span>Прош.</span>
              </td>
              <td className={"border"}>
                Gelo
                <br />
                Ma
                <br />
                ... ?
              </td>
              <td className={"border"}>
                {props.verbIs === "intransitive" ? "ez" : "min"}{" "}
                {props.forms.past["1_i"][0]}
                <br />
                {props.verbIs === "intransitive" ? "tu" : "te"}{" "}
                {props.forms.past["2_you"][0]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wî/wê"}{" "}
                {props.forms.past["3_he_she_it"][0]}
                <br />
                {props.verbIs === "intransitive" ? "em" : "me"}{" "}
                {props.forms.past["4_we"][0]}
                <br />
                {props.verbIs === "intransitive" ? "hûn" : "we"}{" "}
                {props.forms.past["5_you_all"][0]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wan"}{" "}
                {props.forms.past["6_they"][0]}
              </td>
              <td>
                {props.verbIs === "intransitive" ? "ez" : "min"}{" "}
                {props.forms.past["1_i"][1]}
                <br />
                {props.verbIs === "intransitive" ? "tu" : "te"}{" "}
                {props.forms.past["2_you"][1]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wî/wê"}{" "}
                {props.forms.past["3_he_she_it"][1]}
                <br />
                {props.verbIs === "intransitive" ? "em" : "me"}{" "}
                {props.forms.past["4_we"][1]}
                <br />
                {props.verbIs === "intransitive" ? "hûn" : "we"}{" "}
                {props.forms.past["5_you_all"][1]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wan"}{" "}
                {props.forms.past["6_they"][1]}
              </td>
            </tr>
          </>
        )}
        {props.forms.custom && (
          <>
            <tr>
              <td className={"time-column border"}>
                <span>{props.customRowGroupName}</span>
              </td>
              <td className={"border"}>
                Gelo
                <br />
                Ma
                <br />
                ... ?
              </td>
              <td className={"border"}>
                {props.verbIs === "intransitive" ? "ez" : "min"}{" "}
                {props.forms.custom["1_i"][0]}
                <br />
                {props.verbIs === "intransitive" ? "tu" : "te"}{" "}
                {props.forms.custom["2_you"][0]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wî/wê"}{" "}
                {props.forms.custom["3_he_she_it"][0]}
                <br />
                {props.verbIs === "intransitive" ? "em" : "me"}{" "}
                {props.forms.custom["4_we"][0]}
                <br />
                {props.verbIs === "intransitive" ? "hûn" : "we"}{" "}
                {props.forms.custom["5_you_all"][0]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wan"}{" "}
                {props.forms.custom["6_they"][0]}
              </td>
              <td>
                {props.verbIs === "intransitive" ? "ez" : "min"}{" "}
                {props.forms.custom["1_i"][1]}
                <br />
                {props.verbIs === "intransitive" ? "tu" : "te"}{" "}
                {props.forms.custom["2_you"][1]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wî/wê"}{" "}
                {props.forms.custom["3_he_she_it"][1]}
                <br />
                {props.verbIs === "intransitive" ? "em" : "me"}{" "}
                {props.forms.custom["4_we"][1]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wan"}{" "}
                {props.forms.custom["5_you_all"][1]}
                <br />
                {props.verbIs === "intransitive" ? "ew" : "wan"}{" "}
                {props.forms.custom["6_they"][1]}
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
