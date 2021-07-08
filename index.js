import { DombulDOM } from "dombul-dom";
import ACCOUNT_SETTINGS from "./config/user_information";

const App = () => {
  return {
    type: "div",
    props: {
      id: "App",
      className:
        "h-screen w-screen flex flex-col items-center justify-center bg-gray-100 bg-opacity-50",
      children: [
        {
          type: "div",
          props: {
            className:
              "w-[450px] h-[550px] border shadow-lg rounded-xl bg-white",
            children: [
              {
                type: "div",
                props: {
                  className: "h-[250px] px-5 py-5 flex flex-col",
                  children: [
                    {
                      type: "span",
                      props: {
                        className: "font-bold text-lg",
                        innerText: "Send money",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        className: "font-light text-sm",
                        innerText: "Select an account and the recipient IBAN.",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        className: "font-normal text-md mt-2",
                        innerText: "Account",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className: "w-full",
                        children: [
                          {
                            type: "div",
                            props: {
                              className: "mt-1 relative",
                              children: [
                                {
                                  type: "button",
                                  props: {
                                    id: "jsAccountSelect",
                                    onClick: () => {
                                      Toggle("jsAccountDropDown");
                                    },
                                    className:
                                      "relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition",
                                    children: [
                                      {
                                        type: "span",
                                        props: {
                                          className: "flex items-center",
                                          children: [
                                            {
                                              type: "span",
                                              props: {
                                                id: "jsSelectedAccounIBAN",
                                                className:
                                                  "ml-3 block font-bold truncate",
                                                innerText: "Select Account",
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          className:
                                            "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                                          children: [
                                            {
                                              type: "span",
                                              props: {
                                                className:
                                                  "h-5 w-5 text-gray-400",
                                                innerHTML:
                                                  '<svg id="testSVG" class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd">\n    </path>\n</svg>',
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  type: "div",
                                  props: {
                                    id: "jsAccountDropDown",
                                    className:
                                      "absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg hidden",
                                    children: [
                                      {
                                        type: "ul",
                                        props: {
                                          tabIndex: -1,
                                          className:
                                            "max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
                                          children:
                                            ACCOUNT_SETTINGS.accounts.map(
                                              (account) => {
                                                return {
                                                  type: "li",
                                                  props: {
                                                    id:
                                                      "account-option-" +
                                                      account.accountCode,
                                                    role: "option",
                                                    onClick: () => {
                                                      Toggle(
                                                        "jsAccountDropDown"
                                                      );
                                                      document.getElementById(
                                                        "jsSelectedAccounIBAN"
                                                      ).innerText =
                                                        account.ibanNationality +
                                                        account.ibanCode;
                                                    },
                                                    className:
                                                      "text-gray-900 cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",
                                                    children: [
                                                      {
                                                        type: "div",
                                                        props: {
                                                          className:
                                                            "flex flex-col",
                                                          children: [
                                                            {
                                                              type: "span",
                                                              props: {
                                                                id: "jsAccountOption-1-IBAN",
                                                                className:
                                                                  "ml-3 block font-bold text-xs truncate",
                                                                innerText:
                                                                  account.ibanNationality +
                                                                  account.ibanCode,
                                                              },
                                                            },
                                                            {
                                                              type: "span",
                                                              props: {
                                                                className:
                                                                  "flex flex-row justify-between ml-3 block font-normal text-xs truncate",
                                                                children: [
                                                                  {
                                                                    type: "span",
                                                                    props: {
                                                                      id: "jsAccountOption-1-Balance",
                                                                      innerText:
                                                                        account.balance +
                                                                        " " +
                                                                        account.currency,
                                                                    },
                                                                  },
                                                                  {
                                                                    type: "span",
                                                                    props: {
                                                                      id: "jsAccountOption-1-Type",
                                                                      innerText:
                                                                        account.type,
                                                                    },
                                                                  },
                                                                ],
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    ],
                                                  },
                                                };
                                              }
                                            ),
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "span",
                      props: {
                        className: "font-normal text-md mt-2",
                        innerText: "Recipient IBAN",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className: "w-full",
                        children: [
                          {
                            type: "div",
                            props: {
                              className: "mt-1 relative",
                              children: [
                                {
                                  type: "input",
                                  props: {
                                    type: "text",
                                    className:
                                      "relative w-full bg-white rounded-md shacd ..w-lg pl-3 pr-3 py-3 text-left text-light cursor-default border-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                    placeholder:
                                      "TR72 xxxx xxxx xxxx xxxx xxxx xx",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: "hr",
                props: {},
              },
              {
                type: "div",
                props: {
                  className: "h-[220px] px-5 py-5 flex flex-col",
                  children: [
                    {
                      type: "span",
                      props: {
                        className: "font-normal text-md",
                        innerText: "How much do you want to send ?",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className: "",
                        children: [
                          {
                            type: "label",
                            props: {
                              htmlFor: "price",
                              className:
                                "block text-sm font-medium text-gray-700",
                              innerText: "Amount",
                            },
                          },
                          {
                            type: "div",
                            props: {
                              className: "mt-1 relative rounded-md shadow-sm",
                              children: [
                                {
                                  type: "div",
                                  props: {
                                    className:
                                      "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: [
                                      {
                                        type: "span",
                                        props: {
                                          id: "jsCurrencySymbol",
                                          className: "text-gray-500 sm:text-sm",
                                          innerText: "TL",
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  type: "input",
                                  props: {
                                    id: "jsTransferAmount",
                                    type: "number",
                                    name: "price",
                                    className:
                                      "focus:ring-indigo-500 border-l border-b border-t border-gray-100 py-3 px-3 bg-white shadow-lg focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm rounded-md",
                                    placeholder: "0.00",
                                  },
                                },
                                {
                                  type: "div",
                                  props: {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center",
                                    children: [
                                      {
                                        type: "label",
                                        props: {
                                          htmlFor: "currency",
                                          className: "sr-only",
                                          innerText: "Currency",
                                        },
                                      },
                                      {
                                        type: "select",
                                        props: {
                                          id: "jsCurrency",
                                          name: "currency",
                                          className:
                                            "focus-within:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md",
                                          children: [
                                            {
                                              type: "option",
                                              props: {
                                                id: "option-tl",
                                                innerText: "TL",
                                              },
                                            },
                                            {
                                              type: "option",
                                              props: {
                                                id: "option-usd",
                                                innerText: "USD",
                                              },
                                            },
                                            {
                                              type: "option",
                                              props: {
                                                id: "option-eur",
                                                innerText: "EUR",
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className:
                          "mt-5 h-[70px] border rounded-lg flex flex-col",
                        children: [
                          {
                            type: "div",
                            props: {
                              className:
                                "h-1/2 py-1 px-3 text-sd flex flex-row justify-between",
                              children: [
                                {
                                  type: "span",
                                  props: {
                                    innerText: "First",
                                  },
                                },
                                {
                                  type: "span",
                                  props: {
                                    className: "font-light text-sm",
                                    innerText: "Transfer Fee",
                                  },
                                },
                              ],
                            },
                          },
                          {
                            type: "div",
                            props: {
                              className:
                                "h-1/2 py-1 px-3 text-md flex flex-row justify-between",
                              children: [
                                {
                                  type: "span",
                                  props: { innerText: "Second" },
                                },
                                {
                                  type: "span",
                                  props: {
                                    className: "font-light text-sm",
                                    innerText: "Total Amount",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: "hr",
                props: {},
              },
              {
                type: "div",
                props: {
                  className:
                    "h-[80px] bg-gray-100 bg-opacity-50 py-[18px] pr-4 flex flex-row justify-end",
                  children: [
                    {
                      type: "div",
                      props: {
                        className: "w-1/3 flex flex-row justify-start pl-4",
                        children: [
                          {
                            type: "span",
                            props: {
                              id: "jsTimer",
                              className: "h-[40px] p-2",
                              innerText: "02:00",
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "hr",
                      props: {
                        className: "",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className: "w-2/3 flex flex-row justify-end",
                        children: [
                          {
                            type: "button",
                            props: {
                              id: "jsCancelButton",
                              className:
                                "h-[40px] py-2 px-4 mr-2 flex justify-center items-center  bg-transparent hover:border focus:ring-blue-500 focus:ring-offset-blue-200 text-black w-24 transition ease-in duration-200 text-center text-base font-normal focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
                              innerText: "Cancel",
                            },
                          },
                          {
                            type: "button",
                            props: {
                              id: "jsSendButton",
                              onClick: () => {
                                showModal("PIN");
                              },
                              className:
                                "h-[40px] py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
                              innerText: "Send",
                              // children: [
                              //   {
                              //     type: "span",
                              //     props: {
                              //       className:
                              //         "h-[20px] w-[20px] mr-2 animate-spin",
                              //       innerText: "-",
                              //     },
                              //   },
                              // ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

const PINDialog = () => {
  return {
    type: "div",
    props: {
      className:
        "fixed shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto",
      children: [
        {
          type: "div",
          props: {
            className: "w-full h-full text-center",
            children: [
              {
                type: "div",
                props: {
                  className: "flex h-full flex-col justify-between",
                  children: [
                    {
                      type: "span",
                      props: {
                        innerHTML:
                          '<i data-feather="key" class="h-12 w-12 mt-4 m-auto text-gray-500"></i>',
                      },
                    },
                    {
                      type: "p",
                      props: {
                        className:
                          "text-gray-600 dark:text-gray-100 text-md py-2 px-6",
                        children: [
                          {
                            type: "span",
                            props: {
                              innerText: "Please enter the PIN : ",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              className: "text-xs",
                              innerText: "PIN has sent to your phone.",
                            },
                          },
                          {
                            type: "div",
                            props: {
                              className: "mt-2",
                              children: [
                                {
                                  type: "input",
                                  props: {
                                    type: "text",
                                    className:
                                      "w-1/2 bg-white rounded-md shadow-lg pl-3 pr-3 py-3 text-left text-light cursor-default border-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                                    placeholder: "1234",
                                  },
                                },
                                {
                                  type: "span",
                                  props: {
                                    id: "jsTimerPIN",
                                    className: "h-[40]px p-2",
                                    innerText: "02:00",
                                  },
                                },
                              ],
                            },
                          },
                          {
                            type: "div",
                            props: {
                              id: "jsPinErrorMessage",
                              className: "flex flex-col mt-2",
                              children: [
                                {
                                  type: "span",
                                  props: {
                                    className: "text-xs text-red-500",
                                    innerText: "PIN is not valid.",
                                  },
                                },
                                {
                                  type: "span",
                                  props: {
                                    className: "text-xs mt-2 text-red-500",
                                    children: [
                                      {
                                        type: "span",
                                        props: {
                                          id: "jsPinTryLeft",
                                          innerText: "3",
                                        },
                                      },
                                      {
                                        type: "span",
                                        props: {
                                          innerText: " try left.",
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  type: "span",
                                  props: {
                                    className:
                                      "text-md mt-3 font-bold text-red-500",
                                    innerText: "Your account is suspended.",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className:
                          "flex items-center justify-between gap-4 w-full mt-8",
                        children: [
                          {
                            type: "button",
                            props: {
                              onClick: () => {
                                closeModal();
                              },
                              className:
                                "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
                              innerText: "Submit",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

const SuccessDialog = () => {
  return {
    type: "div",
    props: {
      id: "jsSuccessDialog",
      className:
        "fixed shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto",
      children: [
        {
          type: "div",
          props: {
            className: "w-full h-full text-center",
            children: [
              {
                type: "div",
                props: {
                  className: "flex h-full flex-col justify-between",
                  children: [
                    {
                      type: "span",
                      props: {
                        innerHTML:
                          '<svg id="testSVG" class="h-12 w-12 mt-4 m-auto text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">\n<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">\n</path>\n</svg>',
                      },
                    },
                    {
                      type: "p",
                      props: {
                        className:
                          "text-gray-600 dark:text-gray-100 text-md py-2 px-6",
                        children: [
                          {
                            type: "span",
                            props: {
                              id: "jsTransferedAmount",
                              className:
                                "text-gray-800 dark:text-white font-bold",
                              innerText: "500.00 TL",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              innerText: " has been transfered.",
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        className:
                          "flex items-center justify-between gap-4 w-full mt-8",
                        children: [
                          {
                            type: "button",
                            props: {
                              onClick: () => {
                                closeModal();
                              },
                              className:
                                "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
                              innerText: "Close",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

const TimeOutDialog = () => {
  return {
    type: "div",
    props: {
      className:
        "fixed shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto",
      children: [
        {
          type: "div",
          props: {
            className: "w-full h-full text-center",
            children: [
              {
                type: "span",
                props: {
                  innerHTML:
                    '<i id="jsInfoIcon" class="h-12 w-12 mt-4 m-auto text-gray-500" data-feather="info"></i>',
                },
              },
              {
                type: "p",
                props: {
                  className:
                    "text-gray-600 dark:text-gray-100 text-md py-2 px-6",
                  children: [
                    {
                      type: "span",
                      props: {
                        id: "jsTimeOutMessage",
                        className: "text-gray-800 dark:text-white font-bold",
                        innerText: "Time out.",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        innerText: "Session halted.",
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  className:
                    "flex items-center justify-between gap-4 w-full mt-8",
                  children: [
                    {
                      type: "button",
                      props: {
                        onClick: () => {
                          closeModal();
                        },
                        className:
                          "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg",
                        innerText: "Close",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

const showModal = (modalType) => {
  // Render modal backdrop
  DombulDOM.render(ModalBackdrop(), document.getElementById("root"));

  switch (modalType) {
    case "TIMEOUT":
      DombulDOM.render(
        TimeOutDialog(),
        document.getElementById("jsModalBackdrop")
      );
      window.feather.replace();
      break;
    case "PIN":
      DombulDOM.render(PINDialog(), document.getElementById("jsModalBackdrop"));
      window.feather.replace();
      window["jsTimerPIN"] = 120;
      startTimer("jsTimerPIN");
      break;
    case "SUCCESS":
      DombulDOM.render(
        SuccessDialog(),
        document.getElementById("jsModalBackdrop")
      );
      window.feather.replace();
      break;
    default:
      break;
  }
};

const closeModal = () => {
  let root = document.getElementById("root");
  let modal = document.getElementById("jsModalBackdrop");
  // Delete from DOM Tree
  root.removeChild(modal);
};

const ModalBackdrop = () => {
  return {
    type: "div",
    props: {
      id: "jsModalBackdrop",
      className:
        "fixed z-10 top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center",
    },
  };
};

const Toggle = (elementId) => {
  let element = document.getElementById(elementId);
  let prevClass = element.className;
  let hideElement = prevClass.split(" ").includes("hidden");

  if (!hideElement) {
    // Hide
    element.className += " hidden";
  } else {
    // Show
    element.className = prevClass
      .split(" ")
      .filter((className) => className !== "hidden")
      .join(" ");
  }
};

const startTimer = (timerId) => {
  window[timerId] = 120;
  let displayTimer = document.getElementById(timerId);
  let startTimer = setInterval(() => {
    window[timerId]--;

    displayTimer.innerText = showTimer(window[timerId]);

    if (window[timerId] == 0) {
      clearInterval(startTimer);
      // If time runs out on PIN modal
      if (document.getElementById("jsModalBackdrop") != null) {
        closeModal();
      }
      showModal("TIMEOUT");
    }
  }, 1000);
};

const showTimer = (timeInSeconds) => {
  let sec = timeInSeconds % 60;
  let min = Math.floor(timeInSeconds / 60);

  if (sec == 0) {
    sec = "00";
  }

  if (min < 10) {
    return "0" + min + ":" + sec;
  } else {
    return min + ":" + sec;
  }
};

DombulDOM.render(App(), document.getElementById("root"));

// startTimer("jsTimer");
