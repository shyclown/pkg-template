import * as React from "react";
import {FC} from "react";

type ComponentProps = {custom: string};


const Example: FC<ComponentProps> = (props) => {
  return <h1>Component Example: {props.custom}</h1>
}


export default Example;
