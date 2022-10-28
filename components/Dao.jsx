import { TabList, Tab, Widget, Tag, Table, Form } from "web3uikit";
import Link from "next/link";
import { useState } from "react";

export default function Dao() {
  const [proposals, setProposals] = useState([
    [
      1,
      <div>Should we start a collegence chain?</div>,
      <Tag color="green" text="Passed" />,
    ],
    [
      2,
      "Should we accept Elon Musks $44billion offer for our DAO?",
      <Link href="/proposal" state={"hello"}>
      <Tag color="red" text="Rejected" />,
      </Link>,
    ],
    [
      3,
      "Do you want a Web3 Slack tutorial?",
      <Tag color="blue" text="Ongoing" />,
    ],
    [
      4,
      "Are you interested in Xbox/Console web3 tutorials?",
      <Tag color="blue" text="Ongoing" />,
    ],
    [
      5,
      "Would you attend a Moralis Builder get together in Miami?",
      <Tag color="blue" text="Ongoing" />,
    ],
  ]);

  return (
    <>
      <div className="tabContent">
        Govername Overview
        <div className="widgets">
          <Widget info={52} title="Proposals Created" style={{ width: "200%" }}>
            <div className="extraWidgetInfo">
              <div className="extraTitle">Pass Rate</div>
              <div className="progress">
                <div
                  className="progressPercentage"
                  style={{ width: `${60}%` }}
                ></div>
              </div>
            </div>
          </Widget>

          <Widget info={423} title="Eligible Voters"></Widget>
          <Widget info={5} title="Ongoing Proposals" className="w-2/1"></Widget>
        </div>
        Recent Proposals
        <div className="mt-8">
          <Table
            columnsConfig="10% 70% 20%"
            data={proposals}
            header={[
              <span>ID</span>,
              <span>Description</span>,
              <span>Status</span>,
            ]}
            pageSize={5}
          />
        </div>
        <div className="h-10"></div>
        <Form
            buttonConfig={{
                isLoading:false,
                loadingText: "Submitting Proposal",
                text:"Submit",
                theme: "secondary"
            }}
            data={[
                {
                    inputWidth: "100%",
                    name: "New Proposal",
                    type: "textarea",
                    validation: {
                        required: true,
                    },
                    value: "",
                },
            ]}
            onSubmit={(e)=>{
                alert("Proposal Submitted")
            }}
            title="Create a New Proposal"
        />
      </div>
    </>
  );
}
