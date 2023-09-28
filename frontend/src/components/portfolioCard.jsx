import React, { useState } from 'react'
import { Component } from "react";
import he from "he"
import Form from './Form'
import Header from "./Bootstrap/Header";
import Split from "react-split";
import Code from './Code';
import Preview from './Preview'

const  PortfolioCard=()=> {
  const data = {
    Dark: true,
    FormData: {
      FirstName: "",
      LastName: "",
      Thubmnail: "",
      URL: "",
      Description: "",
      Keywords: "",
      Address: "",
      Phone: "",
      Email: "",
      Colour: "#bd5e38",
      Socials: {
        Facebook: "xyz",
        WhatsApp: "xyz",
        Instagram: "xyz",
        Twitter: "xyz",
        LinkedIn: "xyz",
        GitHub: "xyz",
        StackOverflow: "xyz"
      }
    },
    fileDownloadUrl: null,
    PreviewMode: false
  };
  const [initialState, setInitialState] = useState(data);
  const toggleHeader = () => {
     setInitialState(prevState=>{
       return {
         ...prevState,
         Dark: !initialState.Dark
        }
       
     });
 };

  const handleChange = (e) => {
    setInitialState(prevState=>{
      return {
        ...prevState,
        FormData: {
          ...initialState.FormData,
          [e.target.name]: e.target.value
        },
        PreviewMode: false
      };
    });
  };

  //  const download = () => {
  //   let output = he.decode(
  //     document.getElementsByClassName("codefile")[0].innerHTML
  //   );
  //   const blob = new Blob([output]);
  //   const fileDownloadUrl = URL.createObjectURL(blob);
  //   setInitialState({ fileDownloadUrl: fileDownloadUrl }, () => {
  //     // doFileDownload.click();
  //     URL.revokeObjectURL(fileDownloadUrl);
  //     setInitialState({ fileDownloadUrl: "" });
  //   });
  // };
  return (
    <div className="App">
    <Header className={`bg-${initialState.Dark ? "white border-b-2" : "black"} text-${initialState.Dark ? "black" : "white"} flex justify-center h-12 items-center mb-8`} >
    <h1 className='text-2xl text-center inline mx-6 my-0'>Portfolio Generator</h1>
    <button
      className={`btn btn-sm btn-outline-${initialState.Dark ? "primary" : "secondary"} rounded-full`}
      onClick={toggleHeader}
    >
    <i
      className={`fa fa-${initialState.Dark ? "sun" : "moon"}-o text-xl m-0`}
    ></i>
    </button>
  </Header>
  <div className="container ml-12 my-4">
    <div className="flex flex-row">
      <div className="p-3 w-1/2">
        <Form
          FormData={{
            FullName: `${initialState.FormData.FirstName} ${initialState.FormData.LastName}`,
            ...initialState.FormData
          }}
          onChange={handleChange}
        />
        <button
          className={`btn btn-${initialState.Dark ? "success" : "primary"}`}
          onClick={() => {
            // download();
          }}
          disabled={initialState.PreviewMode}
          title="Go to the Code View to download."
        >
          {/* Download */}
        </button>
        <a
          className="hidden"
          download={"portfolio.html"}
          href={initialState.fileDownloadUrl}
          // ref={e => (this.doFileDownload = e)}
        >
          Download
        </a>
      </div>
      <div className="p-3 w-1/2">
        <ul className="flex">
          <li className="mr-2">
            <span
              className={`cursor-pointer px-4 py-2 rounded-t-lg ${
                !initialState.PreviewMode
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={e => {
                e.preventDefault();
                setInitialState(prevState => {
                  return {
                    ...prevState,
                    PreviewMode: false
                  };
                });
              }}
            >
              Code
            </span>
          </li>
          <li>
            <span
              className={`cursor-pointer px-4 py-2 rounded-t-lg ${
                initialState.PreviewMode
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={e => {
                e.preventDefault();
                setInitialState(prevState => {
                  return {
                    ...prevState,
                    PreviewMode: true
                  };
                });
              }}
            >
              Preview
            </span>
          </li>
        </ul>
        {initialState.PreviewMode ? (
          <Preview
            {...initialState.FormData}
            FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          />
        ) : (
          <Code
            {...initialState.FormData}
            FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          />
        )}
      </div>
    </div>
  </div>
</div>

    );
  }
export default PortfolioCard;