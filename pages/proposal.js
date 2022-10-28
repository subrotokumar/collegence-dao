import Link from "next/link";
import { useState } from "react";
import { Tag, Widget, Blockie, Tooltip, Icon, Form, Table } from "web3uikit";

export default function proposal() {
  const [votes, setVotes] = useState([
    ["0x4d2044D8D568c1644158625930De62c4AbBB004a", "🟢"],
    [
      "0x4d2044D8D568c1644158625930De62c4AbBB004a",
      "🔴",
      // <Icon fill="#268c41" size={24} svg="checkmark" />,
    ],
    [
      "0x4d2044D8D568c1644158625930De62c4AbBB004a",
      // <Icon fill="#d93d3d" size={24} svg="arrowCircleDown" />,
      "🔴",
    ],
    [
      "0x4d2044D8D568c1644158625930De62c4AbBB004a",
      "🟢",
      // <Icon fill="#d93d3d" size={24} svg="arrowCircleDown" />,
    ],
    [
      "0x4d2044D8D568c1644158625930De62c4AbBB004a",
      "🔴",
      // <Icon fill="#d93d3d" size={24} svg="arrowCircleDown" />,
    ],
  ]);
  return (
    <>
      <div className="contentProposal">
        <div className="proposal">
          <Link href="/">
            <div className="backHome">
              {/* <Icon fill="#ffffff" size={20} svg="chevronLeft" /> */}
              ◀️ OVERVIEW
            </div>
          </Link>
          <div>Should we accept Elon Musk $44 billion offer for our DAO?</div>
          <div className="proposalOverview">
            <Tag color={"red"} text={"Rejected"} />
            <div className="proposer">
              <span>Proposed By</span>
              <Tooltip
                content={
                  "0x013d3w40f0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199rh4wgssse43"
                }
              >
                <Blockie
                  seed={
                    "0x013d3w40x8626f6940E2eb28930eFb4CeF49B2d1F2C9C11990frh4wgssse43"
                  }
                />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="widgets">
          <Widget info={30} title="Votes For">
            <div className="extraWidgetInfo">
              <div className="extraTitle">{75}%</div>
              <div className="progress">
                <div
                  className="progressPercentage"
                  style={{ width: `${75}%` }}
                ></div>
              </div>
            </div>
          </Widget>
          <Widget info={25} title="Votes Against">
            <div className="extraWidgetInfo">
              <div className="extraTitle">{25}%</div>
              <div className="progress">
                <div
                  className="progressPercentage"
                  style={{ width: `${25}%` }}
                ></div>
              </div>
            </div>
          </Widget>
        </div>
        <div className="votesDiv">
          <Table
            style={{ width: "65%" }}
            columnsConfig="90% 30%"
            data={votes}
            header={[<span>Address</span>, <span>Vote</span>]}
            pageSize={5}
          />
          <Form
            styles={{
              width: "55%",
              height: "250px",
              border: "1px solid rgba(6, 158, 252, 0.2)",
            }}
            buttonConfig={{
              isLoading: false,
              loadingText: "Creating Votes",
              text: "Vote",
              theme: "secondary",
            }}
            data={[
              {
                inputWidth: "100%",
                name: "Cast Vote",
                options: ["For", "Against"],
                type: "radios",
                validation: {
                  required: true,
                },
              },
            ]}
            onSubmit={(e) => {
              alert("Vote Cast");
            }}
            title="Cast Vote"
          />
        </div>
      </div>
      <div className="h-10"></div>
      <div className="voting"></div>
    </>
  );
}
