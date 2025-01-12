'use client'
import { File, FileCode, FileCode2, FileText, Folder, FolderOpen, FolderPlus, IconNode, LucideProps } from "lucide-react";
import React, { useState } from "react";

type folderType = {
  name: string;
  isFolder: boolean;
  children?: folderType[];
  Icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
};
export default function FolderStructure() {
  const folderTree: folderType  = {
    name: "root",
    isFolder: true,
    Icon: Folder, // Root folder Icon
    children: [
      {
        name: "1-1",
        isFolder: true,
        Icon: Folder, // Folder Icon
        children: [
          {
            name: "1-2",
            isFolder: true,
            Icon: FolderPlus, // Folder with a plus Icon
            children: [
              {
                name: "1-3",
                isFolder: true,
                Icon: FolderOpen, // Open folder Icon
                children: [
                  {
                    name: "1-4",
                    isFolder: true,
                    Icon: Folder,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: "file-1",
            isFolder: false,
            Icon: FileText, // Text file Icon
          },
        ],
      },
      {
        name: "2-1",
        isFolder: true,
        Icon: Folder,
        children: [
          {
            name: "2-2",
            isFolder: true,
            Icon: FolderOpen,
            children: [
              {
                name: "2-3",
                isFolder: true,
                Icon: Folder,
                children: [],
              },
            ],
          },
          {
            name: "file-2",
            isFolder: false,
            Icon: File,
          },
        ],
      },
      {
        name: "3-1",
        isFolder: true,
        Icon: Folder,
        children: [
          {
            name: "3-2",
            isFolder: true,
            Icon: Folder,
            children: [
              {
                name: "3-3",
                isFolder: true,
                Icon: FolderOpen,
                children: [
                  {
                    name: "file-3",
                    isFolder: false,
                    Icon: FileText,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "file-root",
        isFolder: false,
        Icon: FileCode, // Code file Icon
      },
    ],
  };
  
  

  return <div className="max-w-screen h-screen p-10">
    <Display folder={folderTree} />
  </div>;
}

const Display = ({
  folder,
  marginLeft = 15,

}: {
  folder: folderType;
  marginLeft?: number;

}) => {
  const { name, isFolder, children ,Icon} = folder;
  const [open , setOpen] = useState(false)
  if (children && children?.length == 0) {
    return <p className="flex items-center gap-1" style={{ marginLeft: `${marginLeft}px`,}}> 
      <Icon size={18}/>
      {name} </p>;
  }

  return (
    <div
      style={{
        marginLeft: `${marginLeft}px`,
      }}
    >
      <div className=" flex items-center gap-2">
      {isFolder && <button className={`${open ? "rotate-90" : ""} transform transition-all`} onClick={()=>setOpen(prev =>!prev)}>{`>`}</button> }
      <p className="flex items-center gap-1">
      <Icon size={18}/>
        {name}</p>
      </div>

      {children &&
        <>
        {
            <div className={`${open ? "block" : "hidden"}`}>
            {
                children.map((child) => (
          <Display
            key={child.name}
            folder={child}
            marginLeft={isFolder ? marginLeft + 15 : marginLeft}
          />
        ))
            }
        </div>
        }
        
        </>}
    </div>
  );
};
