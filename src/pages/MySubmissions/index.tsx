import React, { useState, useEffect } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import SidebarOverlay from "components/SidebarOverlay";
import Footer from "components/Footer";
import { Link, useNavigate } from "react-router-dom";

import DataTable, { TableColumn } from "react-data-table-component";

import { Submission } from "components/Models/submissions";
import { SubmissionService } from "components/Services/SubmissionService";

interface ReconstructedDataRow {
  id: number;
  studentNumber: string;
  title: string;
}



const SubmissionList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };

  function handleNavigate() {
    const win = window.open("https://umat.edu.gh", "_blank");
  }
  const navigate = useNavigate();
  const handleMySubmissionsClick = () => {
    navigate("/MySubmissions");
  };

  const columns: TableColumn<ReconstructedDataRow>[] = [
    {
      name: "id",
      selector: (row) => row.id.toString(),
      sortable: true,
    },
    {
      name: "StudentNumber",
      selector: (row) => row.studentNumber.toString(),
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title.toString(),
      sortable: true,
    },
    
  ];


  const [records, setRecords] = useState<ReconstructedDataRow[]>([]);

  useEffect(() => {
    SubmissionService.getUserSubmissions()
      .then((data) => {
        const reconstructedData: ReconstructedDataRow[] = data.map((row) => ({
          id: row.id,
          studentNumber: row.studentNumber,
          title: row.title,
        }));

        setRecords(reconstructedData);
      })
      .catch((error) => console.error("Error fetching submissions:", error));
  }, []);

  return (
    <>
      <div>
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
        />
      </div>
    </>
  );
};

export default SubmissionList;
