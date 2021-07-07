import { DombulDOM } from "dombul-dom";

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
                                    onClick: () => {},
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
                                                innerText:
                                                  "TR76 1102 1201 1030 0000 1234 01",
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
                                          children: [
                                            {
                                              type: "li",
                                              props: {
                                                id: "account-option-1",
                                                role: "option",
                                                onClick: () => {
                                                  document.getElementById(
                                                    "jsSelectedAccounIBAN"
                                                  ).innerText =
                                                    "TR76 1102 1201 1030 0000 1234 01";
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
                                                              "TR76 1102 1201 1030 0000 1234 01",
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
                                                                    "3162.90 TL",
                                                                },
                                                              },
                                                              {
                                                                type: "span",
                                                                props: {
                                                                  id: "jsAccountOption-1-Type",
                                                                  innerText:
                                                                    "TL/Vadeli",
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
                                              type: "li",
                                              props: {
                                                id: "account-option-2",
                                                role: "option",
                                                onClick: () => {
                                                  document.getElementById(
                                                    "jsSelectedAccounIBAN"
                                                  ).innerText =
                                                    "TR77 8956 5165 1651 6515 6153 02";
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
                                                            id: "jsAccountOption-2-IBAN",
                                                            className:
                                                              "ml-3 block font-bold text-xs truncate",
                                                            innerText:
                                                              "TR77 8956 5165 1651 6515 6153 02",
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
                                                                  id: "jsAccountOption-2-Balance",
                                                                  innerText:
                                                                    "232.95 EUR",
                                                                },
                                                              },
                                                              {
                                                                type: "span",
                                                                props: {
                                                                  id: "jsAccountOption-2-Type",
                                                                  innerText:
                                                                    "EUR/Vadesiz",
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
                              onClick: () => {},
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

DombulDOM.render(App(), document.getElementById("root"));
