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
  transitionState: number;
  title: string;
  submissionDate: string;
  LastModified: string;
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
      name: "Title",
      selector: (row) => row.title.toString(),
      sortable: true,
    },
    {
      name: "TrasitionState",
      selector: (row) => row.transitionState,
      sortable: true,
    },
    {
      name: "Date Submitted",
      selector: (row) => row.submissionDate,
      sortable: true,
    },

    {
      name: "Last Modified",
      selector: (row) => row.submissionDate,
      sortable: true,
    },
  ];

  const [records, setRecords] = useState<ReconstructedDataRow[]>([]);
  const [initialData, setInitialData] = useState<ReconstructedDataRow[]>([]);

  useEffect(() => {
    SubmissionService.getUserSubmissions()
      .then((data) => {
        console.log(data);
        const reconstructedData: ReconstructedDataRow[] = data.map((row) => ({
          id: row.id,
          title: row.title,
          transitionState: row.transitionState,
          submissionDate: row.submissionDate.toString(),
          LastModified: row.submissionDate.toString(),
        }));

        setRecords(reconstructedData);
        setInitialData(reconstructedData);
      })
      .catch((error) => console.error("Error fetching submissions:", error));
  }, []);

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    const newData = initialData.filter((row) =>
      row.title.toLowerCase().includes(query)
    );
    setRecords(query ? newData : initialData);
  }

  return (
    <>
      <div className=" flex flex-col-3 md:h-full page-content bg-white-A700 font-inika mx-auto relative w-full">
        <div className="md:relative col-span-1 ">
          <Sidebar1
            openNav={openNav}
            className="h-full bg-teal-900 flex justify-start left-[0] top-[0]"
          />
        </div>

        <div className="relative bg-gray-100 col-span-2 items-center justify-start  md:ml-[0] w-full">
          <div className="md:mb-[10%] mb-[20%]">
            <StudentProfile />
          </div>

          <div className="md:pl-[5%] md:pr-[5%] ">
            <div className=" bg-white-A700 shadow-md ">
              <div className=" md:ml-[80%] pr-5 pt-5  ">
                <input type="text" onChange={handleFilter} />
              </div>
              <div style={{ minHeight: "400px" }}> {/* Set a minimum height */}
              <DataTable
                columns={columns}
                data={records}
                fixedHeader
                pagination
              />
            </div>
            </div>
          </div>
          <Footer />
        </div>
        
      </div>
    </>
  );
};

export default SubmissionList;
