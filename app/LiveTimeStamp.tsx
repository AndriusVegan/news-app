import React from "react";
import TimeAgo from "react-timeago";
type Props = {
  time: string;
};

function LiveTimeStamp({ time }: Props) {
  return <TimeAgo data={time} />;
}

export default LiveTimeStamp;
