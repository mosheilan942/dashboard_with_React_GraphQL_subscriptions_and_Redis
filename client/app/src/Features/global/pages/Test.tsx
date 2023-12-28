import React from 'react'
import { useState } from 'react'
import { useSubscription } from "@apollo/client";
import { SUBSCRIPTION } from "../graphql/schema";
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from "../../../store/hooks";


type output = {
  percentage: number, 
  __typename: string
}

function HomePage() {

  const [msg, setMsg] = useState<output[] | []>([]);
  const { loading, error } = useSubscription(
    SUBSCRIPTION,
    {
      onData: (data) => {
        if (data) {
          const res = data.data.data.cpu
          console.log("res", res);
          setMsg([...msg, res]);
        }
      },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const allMsg = msg.map((msg) => {
    return (
      <div key={uuidv4()}>
        <div><b>{msg.percentage}</b></div>
        <div>{msg.__typename}</div>
      </div>
    )
  })

  return (
    <>
      hi from hell!!!!!
      {allMsg}
    </>
  )
}

export default HomePage