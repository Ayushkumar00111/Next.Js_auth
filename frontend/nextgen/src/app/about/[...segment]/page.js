"use client"
import { useParams } from "next/navigation";

export default function Segment() {
  const params = useParams();
console.log(params)
  return (
    <h1>User name is </h1>
  );
}