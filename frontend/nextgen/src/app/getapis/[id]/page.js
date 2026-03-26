"use client";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export default function GET() {
    const navi = useRouter();
  const [form, setform] = useState({
    name: "",
    age: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    async function api() {
      let data = await fetch("http://localhost:3000/mongodb/" + id);
      data = await data.json();
      setform(data.success);
    }

    api();
  }, []);

  console.log(form);

  const update = async () => {
   
    let data = await fetch("http://localhost:3000/mongodb/" + id, {
      method: "Put",
      body: JSON.stringify(form),
    });

    data = await data.json();
    return navi.push("/getapis")
  };

  //  }

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="name enter"
        value={form.name}
        onChange={(e) => setform({ ...form, name: e.target.value })}
      />
      <br></br>

      <input
        type="email"
        placeholder="email"
        value={form.email}
        onChange={(e) => setform({ ...form, email: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="age enter"
        value={form.age}
        onChange={(e) => setform({ ...form, age: e.target.value })}
      />
      <br></br>

      <button onClick={update} className="btn">
        Submit
      </button>
    </div>
  );
}
