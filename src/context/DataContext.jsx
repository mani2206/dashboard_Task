import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = [
    { name: "Dashboard", icon: "bi-house-door" },
    { name: "Users", icon: "bi-people" },
    { name: "Service Providers", icon: "bi-person-check" },
    { name: "Franchisee", icon: "bi-building" },
    { name: "Finance", icon: "bi-currency-dollar" },
    { name: "Accounts", icon: "bi-journal-bookmark" },
    { name: "Profile", icon: "bi-person-circle" },
    { name: "Chat", icon: "bi-chat-dots" },
    { name: "Settings", icon: "bi-gear" },
    { name: "Service Management", icon: "bi-tools" },
    { name: "Ads Management", icon: "bi-megaphone" },
    { name: "Notifications", icon: "bi-bell" },
  ];

  const handleTabClick = (tab) => setActiveTab(tab);

  //main
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    invoiceNo: "",
    date: "",
    description: "",
    dr: "",
    cr: "",
  });

  // Initialize with three sample entries
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      invoiceNo: "INV001",
      date: "2024-10-01",
      description: "Electricity Bill",
      dr: "100",
      cr: "16",
    },
    {
      id: 2,
      invoiceNo: "INV002",
      date: "2024-10-02",
      description: "Water Bill",
      dr: "50",
      cr: "13",
    },
    {
      id: 3,
      invoiceNo: "INV003",
      date: "2024-10-03",
      description: "Internet Bill",
      dr: "75",
      cr: "11",
    },
  ]);

  const [selectedExpenses, setSelectedExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addExpense = () => {
    if (formData.invoiceNo && formData.date) {
      setExpenses([...expenses, { ...formData, id: Date.now() }]);
      setFormData({
        invoiceNo: "",
        date: "",
        description: "",
        dr: "",
        cr: "",
      });
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSelectExpense = (id) => {
    setSelectedExpenses((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((expenseId) => expenseId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedExpenses.length === expenses.length) {
      setSelectedExpenses([]);
    } else {
      setSelectedExpenses(expenses.map((expense) => expense.id));
    }
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredExpenses, "filteredExpenses");
  //end main
  return (
    <DataContext.Provider
      value={{
        tabs,
        handleTabClick,
        activeTab,
        setActiveTab,
        filteredExpenses,
        handleSelectAll,
        handleSelectExpense,
        deleteExpense,
        addExpense,
        handleChange,
        selectedExpenses,
        setSelectedExpenses,
        expenses,setExpenses,formData,setFormData,searchQuery,setSearchQuery
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
