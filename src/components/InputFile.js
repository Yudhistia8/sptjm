'use client'
import { useState} from "react";
import {usePathname} from "next/navigation";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import * as XLSX from "xlsx";
import TablePengganti from "@/components/TablePengganti";
import TablePerwakilan from "@/components/TablePerwakilan";

const InputFile = () => {
  const path = usePathname();
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader?.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <>
      <div className='w-96 flex items-center gap-4'>
        <Label>Masukan File</Label>
        <Input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
          accept=".xlsx, .xls, .csv"
        />
      </div>
      {path === "/pengganti" ? <TablePengganti datas={items}/> : <TablePerwakilan datas={items}/>}
    </>
  )
}

export default InputFile
