"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const certificates = [
  { src: "/Certificate/delvin_jsm.png", name: "JSM Certificate" },
  {
    src: "/Certificate/delvin-mimo-react.png",
    name: "Mimo Certificate",
  },
  {
    src: "/Certificate/delvin-mimo-Front-End.png",
    name: "Mimo Certificate",
  },
  {
    src: "/Certificate/delvin-mimo-html.png",
    name: "Mimo Certificate",
  },
  { src: "/Certificate/delvin_google.jpeg", name: "Google Certificate" },
  { src: "/Certificate/delvin_google2.jpeg", name: "Google Certificate" },
  { src: "/Certificate/delvin_google3.jpeg", name: "Google Certificate" },
  { src: "/Certificate/delvin_google4.jpeg", name: "Google Certificate" },
  { src: "/Certificate/delvin_ibm.jpeg", name: "IBM Certificate" },
];

const AlertDialogWithImage = () => {
  const handleDownloadAll = async () => {
    const zip = new JSZip();
    const folder = zip.folder("certificates");

    // Ambil semua gambar dan tambahkan ke ZIP
    for (const certificate of certificates) {
      try {
        const response = await fetch(certificate.src);
        const blob = await response.blob();
        const fileName = certificate.src.split("/").pop() || ""; // Ensure fileName is a string
        folder?.file(fileName, blob);
      } catch (error) {
        console.error(`Failed to fetch ${certificate.src}:`, error);
      }
    }

    // Buat file ZIP dan unduh
    folder?.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "certificates.zip");
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="px-4 py-2 bg-badge text-white rounded-2xl cursor-pointer">
          View Certificates
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>My Certificates</AlertDialogTitle>
          <AlertDialogDescription>
            Below are certificates of my completion from various platforms.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((certificate, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm font-medium mb-2">{certificate.name}</p>
              <Image
                src={certificate.src}
                alt={certificate.name ? certificate.name : ""}
                width={350}
                height={250}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Close
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={handleDownloadAll}
          >
            Download All
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogWithImage;
