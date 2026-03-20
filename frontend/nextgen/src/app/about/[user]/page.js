"use client"
import { useParams } from "next/navigation";

export default function User() {
  const params = useParams();
console.log(params.id)
  return (
    <h1>User name is {params.user}</h1>
  );
}