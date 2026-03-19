"use client"
import { useParams } from "next/navigation";

export default function Segment() {
  const param = useParams();
console.log(param)
  return (
    <h1>User name is </h1>
  );
}