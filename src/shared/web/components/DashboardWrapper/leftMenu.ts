import { MenuType } from "@/components/Leftbar";
const createMenu: any = (role) =>
  [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "tachometer-alt",
    },
    role === "landlord" && {
      title: "Properties",
      url: "/properties",
      icon: "house-user",
    },
    (role === "landlord" || role === "tenant") && {
      title: "Bookings",
      url: "/bookings",
      icon: "star",
    },
    role === "landlord" && {
      title: "Jobs",
      url: "/jobs",
      icon: "tools",
    },
    (role === "landlord" || role === "service") && {
      title: "Job Contracts",
      url: "/jobContracts",
      icon: "file-contract",
    },
    // (role === "tenant" || role === "service") && {
    //   title: "Wish List",
    //   url: "/wishlist",
    //   icon: "heart",
    // },
    role === "service" && {
      title: "Job Proposals",
      url: "/jobProposals",
      icon: "file-alt",
    },

    {
      title: "Transactions",
      url: "/transactions",
      icon: "credit-card",
    },
    {
      title: "Messages",
      url: "/messages",
      icon: "comment-alt",
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "user-tie",
    },
    role === "landlord" && {
      title: "My Tenant",
      url: "/mytenant",
      icon: "user-tie",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: "cog",
      // children: [
      //   {
      //     title: 'Payment Details',
      //     url: '/settings/payments',
      //   },
      //   {
      //     title: 'Expired documents',
      //     url: '/expired-documents',
      //   },
      // ],
    },
    {
      title: "Dev Menu",
      url: "/devMenu",
      icon: "flask",
    },
    // {
    //   title: "New Properties",
    //   url: "/newproperties",
    //   icon: "flask",
    // },
  ].filter(Boolean);

export default createMenu;
